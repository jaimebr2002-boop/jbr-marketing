import amanaLogo from '../assets/clients/amana.png';
import hyundaiAsturdaiLogo from '../assets/clients/hyundai-asturdai.png';
import elCastoOviedoLogo from '../assets/clients/el-casto-oviedo.png';
import mambaNegraLogo from '../assets/clients/mamba-negra.png';

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
];
