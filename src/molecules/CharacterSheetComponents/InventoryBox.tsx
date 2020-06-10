import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
interface InventoryBoxProps {
  inventoryArray: Array<any>;
}

function InventoryBox({ inventoryArray }: InventoryBoxProps) {
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
