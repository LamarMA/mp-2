export interface Materials {
  name: string;
  id: number,
  category: string,
  description: string,
  image: string
  common_locations: string[],
  hearts_recovered: number,
  cooking_effect: string,
  dlc: boolean
}

// https://gadhagod.github.io/Hyrule-Compendium-API/#/
// did a general interface based on Materials's category for now