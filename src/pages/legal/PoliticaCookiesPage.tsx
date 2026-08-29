import React from 'react';
import { LegalPageLayout } from './LegalPageLayout';

export function PoliticaCookiesPage() {
  return (
    <LegalPageLayout title="Política de Cookies" path="/politica-cookies">
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">1. Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo al visitar una web, y que sirven para
          recordar información sobre tu visita.
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">2. Cookies utilizadas en esta web</h2>
        <p>
          [Completar con un listado real: cookies técnicas necesarias, y las que pueda establecer el widget de
          reserva de Cal.com o cualquier herramienta de analítica que se active en el futuro].
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">3. Cómo gestionar las cookies</h2>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar las cookies. [Completar con un panel de
          configuración de cookies si se activan cookies no esenciales].
        </p>
      </section>
    </LegalPageLayout>
  );
}
