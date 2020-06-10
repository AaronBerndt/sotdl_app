import React from "react";
import EncumbranceBox from "./EncumbranceBox";
import chracterObject from "../../utilities/mockData/character";

export default {
  title: "Molecules/CharacterSheetComponents/EncumbranceBox",
  component: EncumbranceBox,
};

const characteristics = chracterObject.characteristics;
export const unencumbered = () => (
  <EncumbranceBox
    itemArray={Array(10)}
    characteristicsArray={characteristics}
    level={4}
  />
);
export const encumbered = () => (
  <EncumbranceBox
    itemArray={Array(50)}
    characteristicsArray={characteristics}
    level={4}
  />
);
