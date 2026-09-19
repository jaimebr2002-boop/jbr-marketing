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
import { LocalPresence } from '../components/sections/LocalPresence';
import { ClientsMarquee } from '../components/sections/ClientsMarquee';

// Reduced from 16 stacked sections to 9 (Fase 2 architecture pass): Fugas,
// Oportunidades and Resultados merged into Problema; Método merged into
// ComoTrabajamos; DiagnosticoJaime's full content (bio + honesty bullets)
// moved to /diagnostico, its short teaser role absorbed into
// DiagnosticoDigital; HablemosCalCom's Cal.com embed also moved to
// /diagnostico, since Diagnóstico's own CTA now points there instead of
// ProyectosResumen added afterwards (position 05), once real project data
// existed to show — it's proof-of-work right after the services pitch, not
// a return to the old "list everything" Home.
export function HomePage() {
  return (
    <>
      {/* 01 */} <Hero />
      {/* 02 */} <ToolsMarquee />
      {/* 03 */} <LocalPresence />
      {/* 04 */} <Problema />
      {/* 05 */} <ServiciosResumen />
      {/* 06 */} <ProyectosResumen />
      {/* 07 */} <ClientsMarquee />
      {/* 08 */} <Sistemas />
      {/* 09 */} <ComoTrabajamos />
      {/* 10 */} <DiagnosticoDigital />
      {/* 11 */} <FAQ />
      {/* 12 */} <CTAFinal />
    </>
  );
}
