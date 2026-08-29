// No real clients/logos have been supplied yet — do not add any until they
// are (no invented names, no fabricated logos). ClientsMarquee imports
// `clients` directly from this file, so populating this array is the only
// step needed to switch it from the "Logo próximamente" placeholder grid to
// the live marquee — no other file needs to change.
//
// Add a client exactly like this once you have a real logo file:
//   { name: 'Nombre real', logo: clientLogoImport, url: 'https://...', category: 'clinicas' }
// `url` and `category` are optional — url links the tile out if present,
// category is free-form and only used if you later want to group/filter.
export interface Client {
  name: string;
  logo: string;
  url?: string;
  category?: string;
}

export const clients: Client[] = [];
