import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ToolsMarquee } from '../components/sections/ToolsMarquee';
import { Problema } from '../components/sections/Problema';
import { ServiciosResumen } from '../components/sections/ServiciosResumen';
import { ProyectosResumen } from '../components/sections/ProyectosResumen';
import { Sistemas } from '../components/sections/Sistemas';
import { ComoTrabajamos } from '../components/sections/ComoTrabajamos';
import { FAQ } from '../components/sections/FAQ';
import { DiagnosticoDigital } from '../components/sections/DiagnosticoDigital';
import { CTAFinal } from '../components/sections/CTAFinal';

// Reduced from 16 stacked sections to 9 (Fase 2 architecture pass): Fugas,
// Oportunidades and Resultados merged into Problema; Método merged into
// ComoTrabajamos; DiagnosticoJaime's full content (bio + honesty bullets)
// moved to /diagnostico, its short teaser role absorbed into
// DiagnosticoDigital; HablemosCalCom's Cal.com embed also moved to
// /diagnostico, since Diagnóstico's own CTA now points there instead of
// scrolling further down this same page. ClientsMarquee is deliberately
// not rendered here for now — there are no real clients yet to show, and an
// empty/placeholder section doesn't earn a spot on a shorter Home; swap it
// back in once there's something real.
//
// ProyectosResumen added afterwards (position 05), once real project data
// existed to show — it's proof-of-work right after the services pitch, not
// a return to the old "list everything" Home.
export function HomePage() {
  return (
    <>
      {/* 01 */} <Hero />
      {/* 02 */} <ToolsMarquee />
      {/* 03 */} <Problema />
      {/* 04 */} <ServiciosResumen />
      {/* 05 */} <ProyectosResumen />
      {/* 06 */} <Sistemas />
      {/* 07 */} <ComoTrabajamos />
      {/* 08 */} <DiagnosticoDigital />
      {/* 09 */} <FAQ />
      {/* 10 */} <CTAFinal />
    </>
  );
}
