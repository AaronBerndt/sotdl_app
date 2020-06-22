import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "../../atoms";
import DiceRollContext from "../../context/DiceRollContext";

interface RollDamageBoxProps {
  value: string;
  rollReason: string;
}

function RollDamageBox({ value, rollReason }: RollDamageBoxProps) {
  const regex = /(-?\d+)/g;
  const result = value.match(regex);

  const amount = result[0];
  const type = result[1];
  const extra = result[2];

  const { rollDamageRoll } = useContext(DiceRollContext);

  return (
    <>
      <Button
        onClick={() =>
          rollDamageRoll(
            rollReason,
            "Damage",
            amount,
            `d${type}`,
            extra ? extra : 0
          )
        }
        size="small"
      >
        <TextField name="Damage" value={value} />
      </Button>
    </>
  );
}

export default RollDamageBox;
