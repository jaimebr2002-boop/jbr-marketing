import React from 'react';
import { CONTACT } from '../../config/brand';
import { LegalPageLayout } from './LegalPageLayout';

export function AvisoLegalPage() {
  return (
    <LegalPageLayout title="Aviso Legal" path="/aviso-legal">
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">1. Datos identificativos</h2>
        <p>
          [Completar con: nombre o razón social, NIF/DNI, domicilio fiscal y datos de inscripción registral si
          aplica]. Contacto: {CONTACT.email}.
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">2. Objeto</h2>
        <p>
          Esta web tiene como finalidad informar sobre los servicios de consultoría de inteligencia artificial y
          tecnología digital ofrecidos, y facilitar el contacto con clientes potenciales.
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">3. Condiciones de uso</h2>
        <p>[Completar con las condiciones de acceso y uso del sitio web].</p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">4. Propiedad intelectual</h2>
        <p>[Completar con la titularidad de los contenidos, marca y elementos gráficos de la web].</p>
      </section>
      <section>
        <h2 className="font-sans font-bold text-ink text-lg mb-2">5. Legislación aplicable</h2>
        <p>[Completar con la legislación y jurisdicción aplicable, conforme a la normativa española vigente].</p>
      </section>
    </LegalPageLayout>
  );
}
