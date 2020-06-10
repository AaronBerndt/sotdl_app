import React from "react";
import FeaturesBox from "./FeaturesBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/CharacterSheetComponents/FeaturesBox",
  component: FeaturesBox,
};

const sampleData = [
  {
    name: "Robust Constitution",
    description:
      "You take half damage from poison. You make challenge rolls with 1 boon to avoid or remove the poisoned affliction.",
    page: "100",
    book: "sotdl",
    level: 0,
  },
  {
    name: "Shake it Off",
    description:
      "You can use an action to heal damage equal to your healing rate and remove one of the following afflictions: fatigued, impaired, or poisoned. Once you use this talent, you cannot use it again until after you complete a rest.",
    level: 4,
    page: "100",
    book: "sotdl",
  },
  {
    name: "Determined",
    description:
      "When you roll a 1 on the die from a boon, you can reroll the die and choose to use the new number.",
    page: "100",
    book: "sotdl",
    level: 1,
  },
];

const onClick = action("button-click");

export const levelZero = () => (
  <FeaturesBox featuresArray={sampleData} level={0} />
);
export const levelOne = () => (
  <FeaturesBox featuresArray={sampleData} level={1} />
);
export const levelThree = () => (
  <FeaturesBox featuresArray={sampleData} level={4} />
);
