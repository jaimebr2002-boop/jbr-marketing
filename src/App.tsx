import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServiciosIndexPage } from './pages/servicios/ServiciosIndexPage';
import { ServiceDetailPage } from './pages/servicios/ServiceDetailPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { DiagnosticoPage } from './pages/DiagnosticoPage';
import { FaqPage } from './pages/FaqPage';
import { AvisoLegalPage } from './pages/legal/AvisoLegalPage';
import { PoliticaPrivacidadPage } from './pages/legal/PoliticaPrivacidadPage';
import { PoliticaCookiesPage } from './pages/legal/PoliticaCookiesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<ServiciosIndexPage />} />
          <Route path="servicios/:slug" element={<ServiceDetailPage />} />
          <Route path="proyectos" element={<ProyectosPage />} />
          <Route path="diagnostico" element={<DiagnosticoPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="aviso-legal" element={<AvisoLegalPage />} />
          <Route path="politica-privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="politica-cookies" element={<PoliticaCookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
