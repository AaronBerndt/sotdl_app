import React from "react";
import EncumbranceBox from "./EncumbranceBox";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Molecules/CharacterSheetComponents/EncumbranceBox",
  component: EncumbranceBox,
};

export const unencumbered = () =>
  withCharacterContext(<EncumbranceBox inventoryArray={Array(10)} />, {
    strength: 20,
  });
export const encumbered = () =>
  withCharacterContext(<EncumbranceBox inventoryArray={Array(50)} />, {
    strength: 10,
  });
