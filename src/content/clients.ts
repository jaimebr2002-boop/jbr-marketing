// No real clients/logos have been supplied yet — do not add any until they are.
// Populate exactly like this once logos exist:
//   { name: 'Nombre real', logo: clientLogoImport }
// then pass `clients` into <ClientsMarquee /> instead of leaving it empty.
export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [];
