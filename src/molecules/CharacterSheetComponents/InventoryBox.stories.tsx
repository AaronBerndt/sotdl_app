import React from "react";
import InventoryBox from "./InventoryBox";

export default {
  title: "Molecules/CharacterSheetComponents/InventoryBox",
  component: InventoryBox,
};

const sampleData = [
  {
    name: "Greataxe",
    damage: "3d6",
    hands: "two",
    properties: "Cumbersome",
    type: "Heavy",
    price: "2 gc",
    availability: "R",
  },

  {
    name: "Backpack",
    description: "You can carry stuff ",
    price: "1 cc",
    availability: "U",
  },
];

export const withItems = () => <InventoryBox inventoryArray={sampleData} />;
export const noItems = () => <InventoryBox inventoryArray={[]} />;
