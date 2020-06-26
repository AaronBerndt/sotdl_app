import React, { useContext } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
} from "@material-ui/core";
import RollDamageBox from "../../molecules/CharacterSheetComponents/RollDamageBox";
import ChracaterPageContext from "../../context/CharacterContext";
import RollAttackBox from "../../molecules/CharacterSheetComponents/RollAttackBox";
import { filterByName, lengthIsZero } from "../../utilities";

function WeaponBox() {
  const {
    items: { weapons },
    strength,
    agility,
  } = useContext<any>(ChracaterPageContext);
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          {["Name", "Attack/Damage", "Properties"].map((header, i) => (
            <TableCell key={i}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {weapons.map((weapon, i) => {
          const weaponName = weapon["name"];
          const properties = weapon["properties"];

          const attackModName = !lengthIsZero(
            filterByName(properties, ["Finesse"])
          )
            ? agility > strength
              ? "agility"
              : "strength"
            : "strength";

          const propertiesList = weapon["properties"]
            .map(({ name }) => name)
            .join(",");
          return (
            <TableRow key={i}>
              <TableCell>{weapon["name"]}</TableCell>
              <TableCell>
                <div style={{ width: "50%" }}>
                  <ButtonGroup color="primary">
                    <RollAttackBox
                      rollReason={weaponName}
                      attackModName={attackModName}
                    />
                    <RollDamageBox
                      value={weapon["damage"]}
                      rollReason={weaponName}
                    />
                  </ButtonGroup>
                </div>
              </TableCell>

              <TableCell>{propertiesList}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default WeaponBox;
