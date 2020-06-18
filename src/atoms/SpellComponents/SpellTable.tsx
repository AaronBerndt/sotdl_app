import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Button,
} from "@material-ui/core";
import { lengthIsZero } from "../../utilities";
import TextField from "../TextField";
import RollDamageBox from "../../molecules/CharacterSheetComponents/RollDamageBox";

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
  const cells = ["name", "type", "attack", "damage", "casting"];

  return (
    <>
      {lengthIsZero(spellArray) ? null : (
        <Table>
          <TableHead>
            <TableRow>
              {["Name", "Type", "Attack", "Damage", "Casting"].map(
                (header, i) => (
                  <TableCell key={i}>{header}</TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {spellArray.map((item, i) => (
              <TableRow key={i} onClick={onClickFuncion}>
                {cells.map((cell, i) => {
                  const spellType = item["type"];
                  const isAttackSpell = spellType === "Attack";
                  return (
                    <TableCell key={i}>
                      {cell === "casting" ? (
                        [...Array(casting).keys()].map((item, i) => (
                          <SpellCheckBox key={i} />
                        ))
                      ) : cell === "attack" ? (
                        isAttackSpell ? (
                          <Button />
                        ) : (
                          "----"
                        )
                      ) : cell === "damage" ? (
                        isAttackSpell ? (
                          <RollDamageBox
                            value={item[cell]}
                            onClickFuncion={onClickFuncion}
                          />
                        ) : (
                          "----"
                        )
                      ) : (
                        item[cell]
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default SpellTable;
