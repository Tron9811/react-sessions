import CharacterDisplay from "../CharactersDisplay/CharacterDisplay";
import { useGetCharactersPerPageQuery } from "../../services/characterApi";
import { useAppDispatch } from "../../globals/hooks";
import React from "react";
import { setCharactersForPage } from "../../globals/redux/reducers/characterReducer";
import { Character, Info } from "../../globals/interfaces";
import { Button } from "@mui/material";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [pageNumber, setPageNumber] = React.useState(1);

  const { data } = useGetCharactersPerPageQuery(pageNumber);

  React.useEffect(() => {
    dispatch(setCharactersForPage(data as Info<Character[]>));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="Home">
      <CharacterDisplay />
      <Button onClick={() => nextPage()}>Next</Button>
    </div>
  );
};

export default Home;
