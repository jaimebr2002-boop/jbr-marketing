import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Hero } from './components/sections/Hero';
import { Problema } from './components/sections/Problema';
import { Metodo } from './components/sections/Metodo';
import { DiagnosticoJaime } from './components/sections/DiagnosticoJaime';
import { Fugas } from './components/sections/Fugas';
import { Oportunidades } from './components/sections/Oportunidades';
import { Herramientas } from './components/sections/Herramientas';
import { Sistemas } from './components/sections/Sistemas';
import { ComoTrabajamos } from './components/sections/ComoTrabajamos';
import { Resultados } from './components/sections/Resultados';
import { PruebaSocial } from './components/sections/PruebaSocial';
import { FAQ } from './components/sections/FAQ';
import { CTAFinal } from './components/sections/CTAFinal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-grain bg-halftone font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* 01 */} <Hero />
        {/* 02 */} <Problema />
        {/* 03 */} <Metodo />
        {/* 04 */} <DiagnosticoJaime />
        {/* 05 */} <Fugas />
        {/* 06 */} <Oportunidades />
        {/* 07 */} <Herramientas />
        {/* 08 */} <Sistemas />
        {/* 09 */} <ComoTrabajamos />
        {/* 10 */} <Resultados />
        {/* 11 */} <PruebaSocial />
        {/* 12 */} <FAQ />
        {/* 13 */} <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
