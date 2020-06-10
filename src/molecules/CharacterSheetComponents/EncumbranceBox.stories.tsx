import React from "react";
import EncumbranceBox from "./EncumbranceBox";

export default {
  title: "Molecules/CharacterSheetComponents/EncumbranceBox",
  component: EncumbranceBox,
};

export const unencumbered = () => (
  <EncumbranceBox inventoryArray={Array(10)} strength={12} />
);
export const encumbered = () => (
  <EncumbranceBox inventoryArray={Array(50)} strength={10} />
);
