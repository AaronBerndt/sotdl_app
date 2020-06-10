import React from "react";
import InventoryBox from "./InventoryBox";
import chracterObject from "../../utilities/mockData/character";

export default {
  title: "Molecules/CharacterSheetComponents/InventoryBox",
  component: InventoryBox,
};

export const withItems = () => (
  <InventoryBox itemsObject={chracterObject.items} />
);
export const noItems = () => (
  <InventoryBox
    itemsObject={{
      weapons: [],
      armor: [],
      other: [],
    }}
  />
);
