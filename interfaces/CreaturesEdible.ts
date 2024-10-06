export interface CreaturesEdible {
  name: string;
  id: number,
  category: string,
  description: string,
  image: string
  cooking_effect: string,
  common_locations: string[],
  edible: boolean,
  hearts_recovered: number,
  dlc: boolean
}

// https://gadhagod.github.io/Hyrule-Compendium-API/#/
// did a general interface based on Creature who is edible category for now