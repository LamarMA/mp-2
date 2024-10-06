import styled from "styled-components";

const SingleEntryDiv = styled.div<{ category: string }>`
  display: flex;
  flex-direction: column;   
  justify-content: center;
  padding: 2%;
  margin: 1%;    
  background-color: ${(props) =>
    props.category === 'monsters' ? 'red' :
      props.category === 'equipment' ? 'black' :
        props.category === 'treasure' ? 'gold' :
          props.category === 'creatures' ? 'blue' :
            props.category === 'materials' ? 'green' :
              'gray'};
  color: white;
  border: 3px black solid;
  font: italic bold calc(1px + 1vw) 'Cinzel Decorative', serif;
  text-align: center;
`;
export default function SingleEntry({ name, category, image }: { name: string; category: string; image: string }) {
  // this function acxtually builds and siplays the entries
  return (
    <SingleEntryDiv category={category}>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <img src={image} alt={`Image of ${name}`} />
    </SingleEntryDiv>
  );
}
