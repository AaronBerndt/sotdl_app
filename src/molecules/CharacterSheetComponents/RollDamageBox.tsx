import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "../../atoms";

interface RollDamageBoxProps {
  value: string;
  onClickFuncion: any;
  rollReason: string;
}

function RollDamageBox({
  value,
  onClickFuncion,
  rollReason,
}: RollDamageBoxProps) {
  const regex = /(-?\d+)/g;
  const result = value.match(regex);

  const amount = result[0];
  const type = result[1];
  const extra = result[2];

  return (
    <>
      <Button
        onClick={() =>
          onClickFuncion(rollReason, "Damage", amount, `d${type}`, extra)
        }
        size="small"
      >
        <TextField name="Roll Damage" value={value} />
      </Button>
    </>
  );
}

export default RollDamageBox;
