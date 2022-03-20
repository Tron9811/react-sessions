import CharacterDisplay from "../../components/Character/Character";
import { useGetAllCharactersQuery } from "../../slices/characterApiSlice";
import { useAppDispatch } from "../../globals/hooks";
import React from "react";
import { getData } from "../../slices/getCharacterSlice";
import { Character, Info } from "../../globals/interfaces";
import { Button } from "@mui/material";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [pageNumber, setPageNumber] = React.useState(1);

  const { data } = useGetAllCharactersQuery(pageNumber);

  React.useEffect(() => {
    dispatch(getData(data as Info<Character[]>));
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
