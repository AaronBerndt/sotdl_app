import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
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
interface InventoryBoxProps {
  itemsObject: Items;
}

function InventoryBox({ itemsObject }: InventoryBoxProps) {
  const { weapons, armor, other } = itemsObject;
  const inventoryArray = [weapons, armor, other].map((array) => array).flat(1);
  const cells = ["name", "price", "availability"];
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {["Name", "Price", "Availability"].map((header, i) => (
              <TableCell key={i}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryArray.map((item, i) => (
            <TableRow key={i}>
              {cells.map((cell, i) => (
                <TableCell key={i}>{item[cell]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default InventoryBox;
