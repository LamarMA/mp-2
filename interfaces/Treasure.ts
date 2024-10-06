export interface Treasure {
  name: string;
  id: number,
  category: string,
  description: string,
  image: string
  common_locations: string[],
  drops: string[]
  dlc: boolean
}