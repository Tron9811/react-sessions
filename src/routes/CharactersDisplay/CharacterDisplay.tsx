import { Character, Info } from "../../globals/interfaces";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useAppSelector } from "../../globals/hooks";

const CharacterDisplay = (): JSX.Element => {
  const getCharacters: Info<Character[]> = useAppSelector(
    (state) => state.getCharactersPerPage.characters
  );

  return (
    <div>
      {getCharacters ? (
        <div>
          {getCharacters?.results?.map((results, index) => {
            return (
              <div style={{ margin: 10, display: "flex-grid" }} key={index}>
                <Paper sx={{ maxWidth: 350, maxHeight: 400 }} elevation={3}>
                  <Card sx={{ maxWidth: 350, maxHeight: 400 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={results.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {results.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Status
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip label={results.status} variant="outlined" />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        Current Location
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip
                          label={results.location.name}
                          variant="outlined"
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                </Paper>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CharacterDisplay;
