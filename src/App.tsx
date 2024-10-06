import useSWR from "swr";
import HyruleCompendium from "../components/HyruleCompendium.tsx";
import styled from "styled-components";

const ParentDiv = styled.div`
    margin: auto;
    border: 5px black solid;
`;

const CommentDiv = styled.div`
    text-align: center;
    margin: auto;
    border: 5px blue solid;
`;
export default function App() {
  // here's where all the fetching actually happens
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("https://botw-compendium.herokuapp.com/api/v3/compendium", fetcher);

  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <ParentDiv>
      <CommentDiv>
        <p> Hello ! Here are all the entries from the Hyrule Compendium. You will notice that the backgrounds correspond to the category of the entry! </p>
      </CommentDiv>
      <HyruleCompendium allEntries={data.data} />
    </ParentDiv>
  );
}