import React from "react";
import { mockCharacter } from "../../utilities/";
import AxiosMock from "../../utilities/AxiosMock";
import CharacterSheetPage from "./CharacterSheetPage";

export default {
  title: "Pages/CharacterSheetPage",
  component: CharacterSheetPage,
};

const mock = (level) => (apiMock) => {
  apiMock
    .onGet("https://sotdl-api.herokuapp.com/characters?name=Ordo")
    .reply(200, mockCharacter(level));
};

export const levelZero = () => (
  <AxiosMock mock={mock(0)}>
    <CharacterSheetPage />;
  </AxiosMock>
);

export const levelOne = () => (
  <AxiosMock mock={mock(1)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelTwo = () => (
  <AxiosMock mock={mock(2)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelThree = () => (
  <AxiosMock mock={mock(3)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelFour = () => (
  <AxiosMock mock={mock(4)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelFive = () => (
  <AxiosMock mock={mock(6)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelSix = () => (
  <AxiosMock mock={mock(6)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelSeven = () => (
  <AxiosMock mock={mock(7)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelEight = () => (
  <AxiosMock mock={mock(8)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelNine = () => (
  <AxiosMock mock={mock(9)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
export const levelTen = () => (
  <AxiosMock mock={mock(10)}>
    <CharacterSheetPage />;
  </AxiosMock>
);
