import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";

interface SpellTableProps {
  spellArray: Array<any>;
  casting: number;
}
function SpellTable({ spellArray, casting }: SpellTableProps) {
  const cells = ["name", "type", "cell"];
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {["Name", "Type", "Casting"].map((header, i) => (
              <TableCell key={i}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {spellArray.map((item, i) => (
            <TableRow key={i}>
              {cells.map((cell, i) => (
                <TableCell key={i}>
                  {cell === "cell"
                    ? [Array(casting).keys()].map((item, i) => (
                        <CheckBox key={i} />
                      ))
                    : item[cell]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default SpellTable;
