import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Hero } from './components/sections/Hero';
import { ToolsMarquee } from './components/sections/ToolsMarquee';
import { Problema } from './components/sections/Problema';
import { Metodo } from './components/sections/Metodo';
import { DiagnosticoJaime } from './components/sections/DiagnosticoJaime';
import { Fugas } from './components/sections/Fugas';
import { Oportunidades } from './components/sections/Oportunidades';
import { Servicios } from './components/sections/Servicios';
import { Sistemas } from './components/sections/Sistemas';
import { ComoTrabajamos } from './components/sections/ComoTrabajamos';
import { Resultados } from './components/sections/Resultados';
import { ClientsMarquee } from './components/sections/ClientsMarquee';
import { FAQ } from './components/sections/FAQ';
import { DiagnosticoDigital } from './components/sections/DiagnosticoDigital';
import { HablemosCalCom } from './components/sections/HablemosCalCom';
import { CTAFinal } from './components/sections/CTAFinal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-grain font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* 01 */} <Hero />
        {/* 02 */} <ToolsMarquee />
        {/* 03 */} <Problema />
        {/* 04 */} <Metodo />
        {/* 05 */} <DiagnosticoJaime />
        {/* 06 */} <Fugas />
        {/* 07 */} <Oportunidades />
        {/* 08 */} <Servicios />
        {/* 09 */} <Sistemas />
        {/* 10 */} <ComoTrabajamos />
        {/* 11 */} <Resultados />
        {/* 12 */} <ClientsMarquee />
        {/* 13 */} <FAQ />
        {/* 14 */} <DiagnosticoDigital />
        {/* 15 */} <HablemosCalCom />
        {/* 16 */} <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
