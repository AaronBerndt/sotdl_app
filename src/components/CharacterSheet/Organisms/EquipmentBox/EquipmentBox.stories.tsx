import React from "react";
import EquipmentBox from "./EquipmentBox";
import characterObject from "../../utilities/mockData/character";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Organisms/CharacterSheetComponents/EquipmentBox",
  component: EquipmentBox,
};

export const unencumbered = () =>
  withCharacterContext(<EquipmentBox itemsObject={characterObject.items} />, {
    strength: 20,
  });

export const encumbered = () =>
  withCharacterContext(<EquipmentBox itemsObject={characterObject.items} />, {
    strength: 4,
  });

