import amanaLogo from '../assets/clients/amana.png';
import hyundaiAsturdaiLogo from '../assets/clients/hyundai-asturdai.png';
import elCastoOviedoLogo from '../assets/clients/el-casto-oviedo.png';
import mambaNegraLogo from '../assets/clients/mamba-negra.png';
import naviserLogo from '../assets/clients/naviser.png';
import segurmaLogo from '../assets/clients/segurma.png';
import bexieLogo from '../assets/clients/bexie.png';
import laLeyendaDelGalloLogo from '../assets/clients/la-leyenda-del-gallo.png';

export interface Client {
  name: string;
  logo: string;
  url?: string;
  category?: string;
}

export const clients: Client[] = [
  { name: 'Amanä', logo: amanaLogo },
  { name: 'Hyundai Asturdai', logo: hyundaiAsturdaiLogo },
  { name: 'El Casto Oviedo', logo: elCastoOviedoLogo },
  { name: 'Mamba Negra Food & Drink', logo: mambaNegraLogo },
  { name: 'Grupo Naviser', logo: naviserLogo },
  { name: 'Segurma', logo: segurmaLogo },
  { name: 'Bexie Energy', logo: bexieLogo },
  { name: 'La Leyenda del Gallo', logo: laLeyendaDelGalloLogo },
];
