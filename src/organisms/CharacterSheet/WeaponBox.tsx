import React, { useContext } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import RollDamageBox from "../../molecules/CharacterSheetComponents/RollDamageBox";
import ChracaterPageContext from "../../context/CharacterContext";
import RollAttackBox from "../../molecules/CharacterSheetComponents/RollAttackBox";
import { filterByName, lengthIsZero } from "../../utilities";

function WeaponBox() {
  const cells = ["name", "attack", "damage"];
  const {
    items: { weapons },
    strength,
    agility,
  } = useContext(ChracaterPageContext);
  return (
    <Table>
      <TableHead>
        <TableRow>
          {["Name", "Attack", "Damage"].map((header, i) => (
            <TableCell key={i}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {weapons.map((weapon, i) => (
          <TableRow key={i}>
            {cells.map((cell, i) => {
              const weaponName = weapon["name"];
              const properties = weapon["properties"];
              const attackModName = !lengthIsZero(
                filterByName(properties, ["Finesse"])
              )
                ? agility > strength
                  ? "agility"
                  : "strength"
                : "strength";

              return (
                <TableCell key={i}>
                  {cell === "attack" ? (
                    <RollAttackBox
                      rollReason={weaponName}
                      attackModName={attackModName}
                    />
                  ) : cell === "damage" ? (
                    <RollDamageBox
                      value={weapon[cell]}
                      rollReason={weaponName}
                    />
                  ) : (
                    weapon[cell]
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default WeaponBox;
