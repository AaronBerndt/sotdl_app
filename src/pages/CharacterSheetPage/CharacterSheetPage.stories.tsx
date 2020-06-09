import React from "react";
import characterData from "../../utilities/mockData/character";
import AxiosMock from "../../utilities/AxiosMock";
import CharacterSheetPage from "./CharacterSheetPage";

export default {
  title: "Pages/CharacterSheetPage",
  component: CharacterSheetPage,
};

const mock = (apiMock) => {
  apiMock
    .onGet("http://localhost:3000/characters?name=Ordo")
    .reply(200, characterData);
};

export const withData = () => (
  <AxiosMock mock={mock}>
    <CharacterSheetPage />;
  </AxiosMock>
);
