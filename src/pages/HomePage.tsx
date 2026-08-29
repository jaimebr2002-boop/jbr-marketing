import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ToolsMarquee } from '../components/sections/ToolsMarquee';
import { Problema } from '../components/sections/Problema';
import { Metodo } from '../components/sections/Metodo';
import { DiagnosticoJaime } from '../components/sections/DiagnosticoJaime';
import { Fugas } from '../components/sections/Fugas';
import { Oportunidades } from '../components/sections/Oportunidades';
import { ServiciosResumen } from '../components/sections/ServiciosResumen';
import { Sistemas } from '../components/sections/Sistemas';
import { ComoTrabajamos } from '../components/sections/ComoTrabajamos';
import { Resultados } from '../components/sections/Resultados';
import { ClientsMarquee } from '../components/sections/ClientsMarquee';
import { FAQ } from '../components/sections/FAQ';
import { DiagnosticoDigital } from '../components/sections/DiagnosticoDigital';
import { HablemosCalCom } from '../components/sections/HablemosCalCom';
import { CTAFinal } from '../components/sections/CTAFinal';

export function HomePage() {
  return (
    <>
      {/* 01 */} <Hero />
      {/* 02 */} <ToolsMarquee />
      {/* 03 */} <Problema />
      {/* 04 */} <Metodo />
      {/* 05 */} <DiagnosticoJaime />
      {/* 06 */} <Fugas />
      {/* 07 */} <Oportunidades />
      {/* 08 */} <ServiciosResumen />
      {/* 09 */} <Sistemas />
      {/* 10 */} <ComoTrabajamos />
      {/* 11 */} <Resultados />
      {/* 12 */} <ClientsMarquee />
      {/* 13 */} <FAQ />
      {/* 14 */} <DiagnosticoDigital />
      {/* 15 */} <HablemosCalCom />
      {/* 16 */} <CTAFinal />
    </>
  );
}
