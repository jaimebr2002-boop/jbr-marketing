import React from 'react';
import { CONTACT } from '../../config/brand';
import { LegalPageLayout } from './LegalPageLayout';

export function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout title="Política de Privacidad" path="/politica-privacidad">
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">1. Responsable del tratamiento</h2>
        <p>
          [Completar con: identidad del responsable, NIF, domicilio y datos de contacto]. Contacto: {CONTACT.email}.
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">2. Datos que se recogen</h2>
        <p>
          A través del formulario de diagnóstico y del contacto directo se pueden recoger: nombre, email, empresa,
          web y el contenido del mensaje enviado. [Completar y verificar contra la implementación real del
          formulario y cualquier herramienta de analítica activa].
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">3. Finalidad del tratamiento</h2>
        <p>Gestionar la solicitud de diagnóstico o contacto y responder a ella. [Completar con el resto de finalidades reales].</p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">4. Base legal</h2>
        <p>[Completar conforme al RGPD y la LOPDGDD — habitualmente el consentimiento del interesado].</p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">5. Derechos de las personas usuarias</h2>
        <p>
          Acceso, rectificación, supresión, oposición, limitación y portabilidad. [Completar con el procedimiento
          concreto para ejercerlos].
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">6. Conservación y cesión de datos</h2>
        <p>[Completar con plazos de conservación y si se ceden datos a terceros proveedores — por ejemplo, Cal.com para la gestión de reservas].</p>
      </section>
    </LegalPageLayout>
  );
}
