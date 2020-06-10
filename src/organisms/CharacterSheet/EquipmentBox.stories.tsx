import React from "react";
import EquipmentBox from "./EquipmentBox";
import characterObject from "../../utilities/mockData/character";

export default {
  title: "Organisms/CharacterSheetComponents/EquipmentBox",
  component: EquipmentBox,
};

export const withProps = () => (
  <EquipmentBox itemsObject={characterObject.items} strength={10} />
);

export const encumbered = () => (
  <EquipmentBox itemsObject={characterObject.items} strength={1} />
);
