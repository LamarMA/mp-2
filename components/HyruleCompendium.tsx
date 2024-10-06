
import styled from "styled-components";
import { Monster } from "../interfaces/Monster";
import { Equipment } from "../interfaces/Equipment";
import { Treasure } from "../interfaces/Treasure";
import { CreaturesEdible } from "../interfaces/CreaturesEdible";
import { CreaturesNonEdible } from "../interfaces/CreaturesNonEdible";
import { Materials } from "../interfaces/Materials";
import SingleEntry from "./SingleEntry";

const AllEntriesDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: darkblue;
`;

type EntryType = Monster | Equipment | Treasure | CreaturesEdible | CreaturesNonEdible | Materials;

export default function HyruleCompendium({ allEntries }: { allEntries: EntryType[] }) {
  // this function maps all the fetched data
  return (
    <AllEntriesDiv>
      {allEntries.map((entry) => (
        <SingleEntry
          key={entry.id}
          name={entry.name}
          category={entry.category}
          image={entry.image}
        />
      ))}
    </AllEntriesDiv>
  );
}
