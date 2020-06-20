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

function WeaponBox() {
  const cells = ["name", "type", "attack", "damage", "casting"];
  const {
    items: { weapons },
  } = useContext(ChracaterPageContext);
  return (
    <Table>
      <TableHead>
        <TableRow>
          {["Name", "Attack", "Damage", "Properties"].map((header, i) => (
            <TableCell key={i}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {weapons.map((weapon, i) => (
          <TableRow key={i}>
            {cells.map((cell, i) => {
              const weaponName = weapon["name"];
              return (
                <TableCell key={i}>
                  {cell === "attack" ? (
                    <Button />
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
