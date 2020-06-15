import React from "react";
import CharacteristicsBox from "./CharacteristicsBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/CharacterSheetComponents/CharacteristicsBox",
  component: CharacteristicsBox,
};

const sampleData = [
  { name: "Strength", value: 10 },
  { name: "Agility", value: 9 },
  { name: "Intellect", value: 10 },
  { name: "Will", value: 10 },
  { name: "Perception", value: 10 },
];

const onClick = action("button-click");

export const levelZero = () => (
  <CharacteristicsBox
    characteristicsArray={sampleData}
    onClickFuncion={onClick}
    level={0}
  />
);
