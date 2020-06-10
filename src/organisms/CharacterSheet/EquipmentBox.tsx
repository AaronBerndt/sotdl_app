import React from "react";
import {
  EncumbranceBox,
  MoneyBox,
  InventoryBox,
} from "../../molecules/CharacterSheetComponents";

type Weapons = {
  name: string;
  damage: string;
  hands: string;
  properties?: string;
  type: string;
  price: string;
  availability: string;
};

type Armor = {
  name: string;
  value: string;
  type: string;
  price: string;
  availability: string;
  properties?: string;
};

type otherItems = {
  name: string;
  price: string;
  availability: string;
  description: string;
};

type Items = {
  weapons: Array<Weapons>;
  armor: Array<Armor>;
  other: Array<otherItems>;
};

interface EquipmentBoxProps {
  itemsObject: Items;
}

function EquipmentBox({ itemsObject }: EquipmentBoxProps) {
  const { money } = itemsObject;
  const { weapons, armor, other } = itemsObject;
  const inventoryArray = [weapons, armor, other].map((array) => array).flat(1);
  return (
    <>
      <EncumbranceBox />
      <MoneyBox moneyObject={money} />
      <InventoryBox />
    </>
  );
}

export default EquipmentBox;
