import styled from "styled-components";
import { Monster } from "../interfaces/Monster"

// I'm letting CHATGPT write my comments as permitted by Prof

// Container for all monsters, using flexbox for layout with even spacing
const AllMonstersDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: darkblue;
`;
// Styling for each individual monster entry
const SingleMonsterDiv = styled.div` //<{ status : string}> any props i wanna pass i would in that
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;    
    background-color: blue;
    color: white;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) 'Cinzel Decorative', serif;
    text-align: center;
`;


export default function HyruleCompendium(props: { data: Monster[] }) {
  return (
    <AllMonstersDiv>
      {
        props.data.map((monster: Monster) => (
          <SingleMonsterDiv key={monster.id}>
            <h1>{monster.name}</h1>
            <img src={monster.image} alt={`image of ${monster.name}`} />
          </SingleMonsterDiv>
        ))
      }
    </AllMonstersDiv>
  );
}


// I'm using prof's code as reference for now
// export default function RickAndMorty(props : { data:Character[] } ){
//     return (
//         <AllCharsDiv >
//             {
//                 props.data.map((char: Character) =>
//                     <SingleCharDiv key={char.id} status={char.status}>
//                         <h1>{char.name}</h1>
//                         <p>{char.species !== "Human" ? "(Not Human)" : ""}</p>
//                         <img src={char.image} alt={`image of ${char.name}`} />
//                     </SingleCharDiv>
//                 )
//             }
//         </AllCharsDiv>
//     );
// }