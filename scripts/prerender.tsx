import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { SERVICES } from '../src/content/services';
import { createServer } from 'vite';

type PageMeta = {
  title: string;
  description: string;
  path: string;
  jsonLd?: object[];
};

const outputDirectory = path.resolve('dist');
const templatePath = path.join(outputDirectory, 'index.html');
const siteUrl = 'https://jbr-marketing.vercel.app';
const routes = [
  '/',
  '/servicios',
  ...SERVICES.map((service) => `/servicios/${service.slug}`),
  '/proyectos',
  '/sobre-mi',
  '/diagnostico',
  '/faq',
  '/asturias',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica-cookies',
];

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function jsonForHtml(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function setMeta(html: string, selector: RegExp, replacement: string) {
  if (!selector.test(html)) throw new Error(`Expected HTML metadata not found: ${selector}`);
  return html.replace(selector, replacement);
}

function applyPageMetadata(template: string, meta: PageMeta) {
  const url = `${siteUrl}${meta.path === '/' ? '/' : meta.path}`;
  let html = template;
  html = setMeta(html, /<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = setMeta(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  );
  html = setMeta(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  html = setMeta(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = setMeta(html, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  html = setMeta(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = setMeta(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  html = setMeta(html, /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);

  const routeSchemas = (meta.jsonLd ?? [])
    .map((schema) => `<script type="application/ld+json">${jsonForHtml(schema)}</script>`)
    .join('\n    ');
  return html.replace('</head>', `    ${routeSchemas}\n  </head>`);
}

const template = await readFile(templatePath, 'utf8');
const viteServer = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  ssr: { external: ['react-router-dom', 'react-router'] },
});
const [{ AppRoutes }, { PageMetaCaptureContext }, { renderToString, StaticRouter }] = await Promise.all([
  viteServer.ssrLoadModule('/src/App.tsx'),
  viteServer.ssrLoadModule('/src/hooks/usePageMeta.ts'),
  viteServer.ssrLoadModule('/src/ssr-runtime.ts'),
]);

try {
  for (const route of routes) {
    let capturedMeta: PageMeta | undefined;
    const appHtml = renderToString(
      <StaticRouter location={route}>
        <PageMetaCaptureContext.Provider value={(meta: PageMeta) => { capturedMeta = meta; }}>
          <AppRoutes />
        </PageMetaCaptureContext.Provider>
      </StaticRouter>,
    );

    if (!capturedMeta) {
      if (route !== '/') throw new Error(`Route did not provide SEO metadata: ${route}`);
      capturedMeta = {
        title: 'Jaime Bernáldez | Desarrollo web, IA y software en Oviedo',
        description: 'Consultor tecnológico en Oviedo. Desarrollo web, software a medida, automatización y agentes de IA para empresas de Asturias, España y proyectos internacionales.',
        path: '/',
      };
    }

    const html = applyPageMetadata(template, capturedMeta).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    if (!html.includes('id="root">') || !html.includes('canonical')) throw new Error(`Failed to render route: ${route}`);

    const relativeFile = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const filePath = path.join(outputDirectory, relativeFile);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, html, 'utf8');
    console.log(`Prerendered ${route} → ${relativeFile}`);
  }
} finally {
  await viteServer.close();
}
