export interface Monster {
  name: string;
  id: number,
  category: string,
  description: string,
  image: string
  common_locations: string[],
  drops: string[],
  dlc: boolean
}

// https://gadhagod.github.io/Hyrule-Compendium-API/#/
// did a general interface based on Monster's category for now