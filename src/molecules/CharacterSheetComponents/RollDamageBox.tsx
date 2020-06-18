import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "../../atoms";

interface RollDamageBoxProps {
  value: string;
  onClickFuncion: any;
}

function RollDamageBox({ value, onClickFuncion }: RollDamageBoxProps) {
  const regex = /(-?\d+)/g;
  const result = value.match(regex);

  const type = result[0];
  const amount = result[1];
  const extra = result[2];

  return (
    <>
      <Button onClick={() => onClickFuncion(type, amount, extra)} size="small">
        <TextField name="Roll Damage" value={value} />
      </Button>
    </>
  );
}

export default RollDamageBox;
