import React from "react";
import CharactersPage from "./CharactersPage";
import AxiosMock from "../../utilities/AxiosMock";
import { characterData } from "../../utilities/mockData";

export default {
  title: "Pages/CharactersPage",
  component: CharactersPage,
};

const mock = (apiMock) => {
  apiMock
    .onGet("https://sotdl-api.herokuapp.com/characters")
    .reply(200, characterData);
};

export const withComp = () => (
  <AxiosMock mock={mock}>
    <CharactersPage />
  </AxiosMock>
);
