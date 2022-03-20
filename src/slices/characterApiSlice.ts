import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character, Info } from "../globals/interfaces/index";

// Define a service using a base URL and expected endpoints
export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<Info<Character[]>, number>({
      query: (pageNumber) => `character/?page=${pageNumber}`,
      keepUnusedDataFor: 1,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCharactersQuery } = charactersApi;
