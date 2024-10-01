import React from "react";
import { Monster } from "../interfaces/Monster";
import HyruleCompendium from "../components/HyruleCompendium.tsx";
import styled from "styled-components";
import './App.css'

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px red solid;
`;
export default function App() {
  const [data, setData] = React.useState<Monster[] | undefined>(undefined);

  // async func to fetch data
  const fetchData = async () => {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters');
    const result = await response.json();
    return result.data;
  };


  React.useEffect(() => {
    fetchData()
      .then(fetchedData => {
        console.log("Data fetched successfully");
        setData(fetchedData);
      })
      .catch(error => console.error(error));
  }, []);

  // handle undefined data
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ParentDiv>
      <p>Total monsters: {data.length}</p>
      <HyruleCompendium data={data} />
    </ParentDiv>
  );
}