import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@material-ui/core";
import { lengthIsZero, filterByName } from "../../utilities";
import RollDamageBox from "../../molecules/CharacterSheetComponents/RollDamageBox";
import RollAttackBox from "../../molecules/CharacterSheetComponents/RollAttackBox";
import ChracaterPageContext from "../../context/CharacterContext";

interface SpellTableProps {
  spellArray: Array<any>;
  casting: number;
  onClickFuncion: any;
}

function SpellCheckBox({ isChecked }) {
  const [checked, setChecked] = React.useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  console.log(isChecked);
  return (
    <Checkbox
      checked={checked || isChecked}
      onChange={onChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
}

function SpellTable({ spellArray, casting, onClickFuncion }: SpellTableProps) {
  const cells = ["name", "type", "attack", "damage", "casting"];

  const { spellsCast } = useContext(ChracaterPageContext);
  console.log(spellsCast);
  return (
    <>
      {lengthIsZero(spellArray) ? null : (
        <Table size="small">
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
                  const spellName = item["name"];
                  const spellType = item["type"];
                  const isAttackSpell = spellType === "Attack";
                  const attackModName =
                    item["attribute"] == "Will" ? "will" : "intellect";

                  return (
                    <TableCell key={i}>
                      {cell === "casting" ? (
                        [...Array(casting).keys()].map((item, i) => {
                          const useArray =
                            filterByName(spellsCast, [spellName]) || ``;
                          const isChecked = lengthIsZero(useArray)
                            ? false
                            : i + 1 <= useArray[0].uses;
                          return (
                            <SpellCheckBox key={i} isChecked={isChecked} />
                          );
                        })
                      ) : cell === "attack" ? (
                        isAttackSpell ? (
                          <RollAttackBox
                            rollReason={spellName}
                            attackModName={attackModName}
                          />
                        ) : (
                          "----"
                        )
                      ) : cell === "damage" ? (
                        isAttackSpell ? (
                          <RollDamageBox
                            value={item[cell]}
                            rollReason={spellName}
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
