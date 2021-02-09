import React from "react";
import CharacterContentBox from "./CharacterContentBox";

export default {
  title: "Organisms/CharacterSheetComponents/CharacterContentBox",
  component: CharacterContentBox,
};

export const withSpells = () => (
  <CharacterContentBox>
    <p>Tab 1</p>
    <p>Tab 2</p>
    <p>Tab 3</p>
  </CharacterContentBox>
);

export const noSpells = () => (
  <CharacterContentBox>
    <p>Tab 1</p>
    <p>Tab 2</p>
    <p>Tab 3</p>
  </CharacterContentBox>
);
