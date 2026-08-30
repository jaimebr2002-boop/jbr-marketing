import React from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { BRAND_NAME, SITE_URL, calLinkWithCampaign } from '../../config/brand';
import { usePageMeta } from '../../hooks/usePageMeta';
import { getRelatedServices, getServiceBySlug } from '../../content/services';
import { CtaButton } from '../../components/ui/Button';
import { Reveal, RevealStagger } from '../../components/ui/Reveal';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const related = getRelatedServices(service);
  const path = `/servicios/${service.slug}`;

  usePageMeta({
    title: service.seoTitle,
    description: service.seoDescription,
    path,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE_URL}/servicios` },
          { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}${path}` },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        provider: { '@type': 'ProfessionalService', name: `${BRAND_NAME} — Consultoría de IA`, url: SITE_URL },
        areaServed: 'España',
        url: `${SITE_URL}${path}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  });

  return (
    <article>
      {/* Hero — dark */}
      <section className="w-full bg-surface-inverse text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Ruta de navegación" className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{service.title}</span>
          </nav>
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">{service.title}</p>
          <h1 className="reveal font-sans font-bold leading-[1.1] text-[clamp(1.9rem,4.8vw,3rem)] text-balance max-w-3xl">
            {service.h1}
          </h1>
          <p className="reveal mt-6 font-sans text-white/70 leading-relaxed max-w-2xl">{service.intro}</p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <CtaButton href={calLinkWithCampaign(`servicio-${service.slug}`)}>Reserva tu diagnóstico gratuito</CtaButton>
            <CtaButton
              href="/diagnostico"
              target="_self"
              variant="secondary"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-ink"
              onClick={(e) => {
                e.preventDefault();
                navigate('/diagnostico');
              }}
            >
              Solicita diagnóstico digital
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Qué aporta — light */}
      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Qué aporta</p>
          <p className="reveal font-sans text-ink text-lg leading-relaxed max-w-2xl">{service.valueProp}</p>

          <RevealStagger as="div" className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div key={b.title}>
                <span className="font-serif italic text-ink-tertiary text-sm">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-sans font-bold text-ink">{b.title}</h3>
                <p className="mt-1.5 font-sans text-[13.5px] text-ink-secondary leading-relaxed">{b.body}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Encaje — white */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Encaje</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl">
            ¿Este servicio es para ti?
          </h2>
          <p className="reveal mt-4 font-sans text-ink-secondary">Si te reconoces en alguna de estas situaciones, probablemente sí.</p>
          <RevealStagger as="ul" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none max-w-3xl">
            {service.forYouIf.map((item) => (
              <li key={item} className="font-sans text-[15px] text-ink flex gap-3">
                <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                {item}
              </li>
            ))}
          </RevealStagger>
          <div className="reveal mt-9">
            <CtaButton href={calLinkWithCampaign(`servicio-${service.slug}-encaje`)}>Reserva tu diagnóstico gratuito</CtaButton>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos — dark */}
      <section className="w-full bg-surface-inverse text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Cómo trabajamos</p>
          <h2 className="reveal font-sans font-bold text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl">
            El proceso, paso a paso.
          </h2>
          <RevealStagger as="ol" className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 list-none">
            {service.process.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-serif italic text-brand-accent text-lg shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-sans font-bold">{step.title}</h3>
                  <p className="mt-1.5 font-sans text-[13.5px] text-white/70 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Transparencia — light */}
      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Transparencia</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl">
            Lo que deberías saber antes de contratar.
          </h2>
          <div className="mt-10 flex flex-col gap-8 max-w-2xl">
            <Reveal>
              <h3 className="font-sans font-bold text-ink">¿Cuánto cuesta este servicio?</h3>
              <p className="mt-2 font-sans text-[15px] text-ink-secondary leading-relaxed">{service.pricingNote}</p>
            </Reveal>
            <Reveal>
              <h3 className="font-sans font-bold text-ink">Qué necesito de ti para empezar</h3>
              <p className="mt-2 font-sans text-[15px] text-ink-secondary leading-relaxed">{service.whatWeNeed}</p>
            </Reveal>
            <Reveal>
              <h3 className="font-sans font-bold text-ink">Qué no incluye</h3>
              <p className="mt-2 font-sans text-[15px] text-ink-secondary leading-relaxed">{service.whatsNotIncluded}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ — white */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">FAQ</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl mb-8">
            Lo que nos preguntan habitualmente.
          </h2>
          <RevealStagger as="div" className="flex flex-col divide-y divide-brand-border max-w-2xl">
            {service.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 font-sans font-semibold text-ink cursor-pointer list-none">
                  {f.q}
                  <span className="shrink-0 text-ink-tertiary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-sans text-[15px] text-ink-secondary leading-relaxed">{f.a}</p>
              </details>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Sigue explorando — light */}
      {related.length > 0 && (
        <section className="w-full bg-canvas py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Sigue explorando</p>
            <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance mb-8">
              También te puede interesar.
            </h2>
            <RevealStagger as="div" className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/servicios/${r.slug}`}
                  className="group bg-surface rounded-card border border-brand-border p-6 flex flex-col gap-2 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_10px_28px_var(--accent-glow)]"
                >
                  <h3 className="font-sans font-bold text-ink text-[15px]">{r.title}</h3>
                  <p className="font-sans text-[13px] text-ink-secondary leading-relaxed">{r.shortDescription}</p>
                  <span className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-ink group-hover:text-brand-accent transition-colors duration-200">
                    Ver más &rarr;
                  </span>
                </Link>
              ))}
            </RevealStagger>
          </div>
        </section>
      )}

      {/* Siguiente paso — one deliberate lime block, the single strategic use of full-accent color on this page */}
      <section className="w-full bg-brand-accent text-accent-ink py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-accent-ink/70 mb-4">Siguiente paso</p>
          <h2 className="font-sans font-bold text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl">
            Empieza con un diagnóstico gratuito, sin compromiso.
          </h2>
          <p className="mt-4 font-sans text-accent-ink/80 max-w-lg">
            Reviso tu situación actual y te digo con qué serviría empezar. Sin presión, sin letra pequeña.
          </p>
          <div className="mt-7">
            <CtaButton
              href={calLinkWithCampaign(`servicio-${service.slug}-final`)}
              className="!bg-surface-inverse !text-white hover:!bg-white hover:!text-ink"
            >
              Reserva tu diagnóstico gratuito
            </CtaButton>
          </div>
        </div>
      </section>
    </article>
  );
}
