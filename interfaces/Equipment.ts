export interface Equipment {
  name: string;
  id: number,
  category: string,
  description: string,
  image: string
  common_locations: string[],
  properties: {
    attack: string,
    defense: string
  },
  dlc: boolean
}

// https://gadhagod.github.io/Hyrule-Compendium-API/#/
// did a general interface based on Equipment's category for now