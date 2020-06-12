import React from "react";
import CharacterContentBox from "./CharacterContentBox";

export default {
  title: "Organisms/CharacterSheetComponents/CharacterContentBox",
  component: CharacterContentBox,
};

export const withSpells = () => (
  <CharacterContentBox spellArrayLength={1} power={1}>
    <p>Tab 1</p>
    <p>Tab 2</p>
    <p>Tab 3</p>
  </CharacterContentBox>
);

export const noSpells = () => (
  <CharacterContentBox spellArrayLength={0} power={1}>
    <p>Tab 1</p>
    <p>Tab 2</p>
    <p>Tab 3</p>
  </CharacterContentBox>
);
