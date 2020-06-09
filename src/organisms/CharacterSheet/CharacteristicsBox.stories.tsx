import React from "react";
import CharacteristicsBox from "./CharacteristicsBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/CharacterSheetComponents/CharacteristicsBox",
  component: CharacteristicsBox,
};

const sampleData = [
  { name: "Strength", value: 10, level: 0 },
  { name: "Agility", value: 9, level: 0 },
  { name: "Intellect", value: 10, level: 0 },
  { name: "Will", value: 10, level: 0 },
  { name: "Perception", value: 1, level: 0 },
  { name: "Health", value: 4, level: 0 },
  { name: "Size", value: 0.5, level: 0 },
  { name: "Speed", value: 8, level: 0 },
  { name: "Strength", value: 1, level: 1 },
  { name: "Will", value: 1, level: 1 },
  { name: "Strength", value: 1, level: 3 },
  { name: "Agility", value: 1, level: 3 },
];

const onClick = action("button-click");

export const levelZero = () => (
  <CharacteristicsBox
    characteristicsArray={sampleData}
    onClickFuncion={onClick}
    level={0}
  />
);
export const levelOne = () => (
  <CharacteristicsBox
    characteristicsArray={sampleData}
    onClickFuncion={onClick}
    level={1}
  />
);
export const levelThree = () => (
  <CharacteristicsBox
    characteristicsArray={sampleData}
    onClickFuncion={onClick}
    level={3}
  />
);
