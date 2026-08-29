import { useEffect } from 'react';
import { SITE_URL } from '../config/brand';

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  /** Extra JSON-LD objects to inject for this page only (Service, BreadcrumbList, FAQPage...). */
  jsonLd?: object[];
}

function setMetaTag(selector: string, attr: 'content', value: string, createAttrs?: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el && createAttrs) {
    el = document.createElement('meta');
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el?.setAttribute(attr, value);
}

// No react-helmet dependency for a handful of routes: this hook directly patches
// document.title, the description/OG/canonical tags, and injects page-specific
// JSON-LD script tags, cleaning its own tags up on unmount so navigating away
// never leaves a stale <script type="application/ld+json"> from a previous page.
export function usePageMeta({ title, description, path, jsonLd }: PageMetaOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);

    const url = `${SITE_URL}${path}`;
    setMetaTag('meta[property="og:url"]', 'content', url);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    const injectedScripts: HTMLScriptElement[] = [];
    (jsonLd ?? []).forEach((obj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-jsonld', 'true');
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
      injectedScripts.push(script);
    });

    return () => {
      document.title = prevTitle;
      injectedScripts.forEach((s) => s.remove());
    };
  }, [title, description, path, jsonLd]);
}
