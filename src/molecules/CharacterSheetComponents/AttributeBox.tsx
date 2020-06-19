import React, { useContext } from "react";
import { Badge, Button } from "@material-ui/core";
import { TextField } from "../../atoms";
import DiceRollContext from "../../context/DiceRollContext";

interface AttributeBoxProps {
  name: string;
  value: number;
  withMod: boolean;
  withNoRoll: boolean;
}

function AttributeBox({ name, value, withMod, withNoRoll }: AttributeBoxProps) {
  const mod = value - 10 > 0 ? `${value - 10}` : value - 10;
  const modLabel = value - 10 > 0 ? `+ ${value - 10}` : value - 10;
  const { boonAmount, baneAmount, makeChallengeRoll } = useContext(
    DiceRollContext
  );
  return (
    <>
      <Button
        onClick={() => makeChallengeRoll(name, boonAmount, baneAmount, mod)}
        size="small"
        disabled={withNoRoll}
      >
        {withMod ? (
          <Badge badgeContent={value} color="primary">
            <TextField name={name} value={modLabel} />
          </Badge>
        ) : (
          <TextField name={name} value={value} />
        )}
      </Button>
    </>
  );
}

export default AttributeBox;
