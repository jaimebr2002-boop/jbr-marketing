# Desplegar JBR Marketing en Vercel

Este repo (`jbr-marketing`) es completamente independiente del repo `agencIA` y de su proyecto
Vercel `agenc-ia` (donde vive la web antigua de Impulsa Studio, en `impulsastudioai.vercel.app`).
Crear un proyecto Vercel a partir de este repo **no requiere tocar nada** en `agenc-ia`.

## Pasos manuales (panel de Vercel)

1. Entra en [vercel.com](https://vercel.com) y confirma que estás en el equipo **jaime's projects**
   (selector arriba a la izquierda).
2. **Add New…** → **Project**.
3. En "Import Git Repository", busca y selecciona `jaimebr2002-boop/jbr-marketing`. Si no aparece
   en la lista, click en "Adjust GitHub App Permissions" y da acceso al repo nuevo (la integración
   de GitHub con Vercel ya existe a nivel de cuenta, solo hace falta autorizar este repo concreto).
4. En la pantalla de configuración del import:
   - **Project Name**: escribe exactamente `jbr-marketing` — esto es lo que determina que el
     dominio automático quede como `jbr-marketing.vercel.app`. Si Vercel sugiere otro nombre
     (por ejemplo si ya existe algo parecido), cámbialo a mano a `jbr-marketing`.
   - **Framework Preset**: debería autodetectar **Vite**. Si no lo hace, selecciónalo manualmente.
   - **Root Directory**: déjalo en blanco / raíz — todo el proyecto vive en la raíz del repo.
   - **Build Command** / **Output Directory**: deja los valores por defecto de Vite
     (`npm run build` / `dist`) salvo que Vercel no los detecte solo.
5. Click **Deploy**. Al ser un proyecto nuevo, `main` queda automáticamente como su rama de
   producción — no hay que configurar nada más para eso.
6. Cuando termine el build (uno o dos minutos), abre **`jbr-marketing.vercel.app`** y confirma que
   carga la web nueva de Jaime Bernáldez correctamente.

## Qué NO tocar en el proyecto `agenc-ia`

Para este proceso **no hace falta entrar en la configuración de `agenc-ia` en ningún momento**.
Por si acaso, evita explícitamente:

- `agenc-ia → Settings → Domains` — ahí vive `impulsastudioai.vercel.app` apuntando a Production.
  No lo edites ni le cambies la rama asociada.
- `agenc-ia → Settings → Git` — no cambies su Production Branch (`main`) ni desconectes el repo.
- No borres ni pauses el proyecto `agenc-ia`.

Los dos proyectos (`agenc-ia` y `jbr-marketing`) son entidades separadas en Vercel desde el
momento en que completes el paso 5 — no comparten dominios, variables de entorno, ni
configuración de ningún tipo.

## Cuando compres el dominio definitivo (p. ej. `jaimebernaldez.com`)

Se añade **en este proyecto nuevo** (`jbr-marketing`), no en `agenc-ia`:

`jbr-marketing → Settings → Domains → Add` → escribe el dominio → sigue las instrucciones de
verificación DNS que te dé Vercel → una vez verificado, asígnalo a Production.

Después, hay que sustituir `https://example.com` por el dominio real en 4 sitios del código
(ya señalizados con comentarios TODO en el propio repo):

| Archivo | Qué cambiar |
|---|---|
| `src/config/brand.ts` | La constante `SITE_URL` — de aquí leen automáticamente todas las páginas (canonical, Open Graph, JSON-LD) |
| `index.html` | ~15 apariciones hardcodeadas (canonical, `og:url`, 4 bloques JSON-LD) — no lee de `SITE_URL`, hay que sustituirlas a mano |
| `public/sitemap.xml` | Todas las URLs del listado |
| `public/robots.txt` | La línea `Sitemap: https://example.com/sitemap.xml` |

No pongas el dominio de preview (`jbr-marketing.vercel.app`) en ninguno de estos sitios como si
fuera el definitivo — es una URL temporal, no la dirección final del negocio.
