import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@material-ui/core";
import {lengthIsZero} from "../../utilities";

interface SpellTableProps {
  spellArray: Array<any>;
  casting: number;
  onClickFuncion: any;
}

function SpellCheckBox() {
  const [checked, setChecked] = React.useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
}

function SpellTable({ spellArray, casting, onClickFuncion }: SpellTableProps) {
  const cells = ["name", "type", "casting"];
  return (
    <>
      {lengthIsZero(spellArray) ? null : (
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
              <TableRow key={i} onClick={onClickFuncion}>
                {cells.map((cell, i) => (
                  <TableCell key={i}>
                    {cell === "casting"
                      ? [...Array(casting).keys()].map((item, i) => (
                          <SpellCheckBox key={i} />
                        ))
                      : item[cell]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default SpellTable;
