import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Info } from "../globals/interfaces";
import type { RootState } from "../stores/characterStore";

// Define a type for the slice state
interface CharactersState {
  characters: Info<Character[]>;
}

// Define the initial state using that type
const initialState: CharactersState = {
  characters: [] as Info<Character[]>,
};

export const getCharacterSlice = createSlice({
  name: "getAllCharacterResults",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getData: (state, action: PayloadAction<Info<Character[]>>) => {
      state.characters = action.payload;
    },
  },
});

export const { getData } = getCharacterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllCharacters = (state: RootState) =>
  state.getAllCharacterResults.characters;

export default getCharacterSlice.reducer;
