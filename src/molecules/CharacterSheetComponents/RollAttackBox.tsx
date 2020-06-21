import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "../../atoms";
import DiceRollContext from "../../context/DiceRollContext";
import ChracaterPageContext from "../../context/CharacterContext";

interface RollAttackBoxProps {
  rollReason: string;
  attackModName: string;
}

function RollAttackBox({ attackModName, rollReason }: RollAttackBoxProps) {
  const { strength, agility, will, intellect } = useContext(
    ChracaterPageContext
  );
  const { makeAttackRoll, boonAmount, baneAmount } = useContext(
    DiceRollContext
  );

  const modObject = {
    strength,
    agility,
    will,
    intellect,
  };

  const attribute = modObject[attackModName];

  const mod = attribute - 10 > 0 ? `${attribute - 10}` : attribute - 10;
  const modLabel = attribute - 10 > 0 ? `+ ${attribute - 10}` : attribute - 10;

  return (
    <>
      <Button
        onClick={() => makeAttackRoll(rollReason, boonAmount, baneAmount, mod)}
        size="small"
      >
        <TextField name="Roll Attack" value={modLabel} />
      </Button>
    </>
  );
}

export default RollAttackBox;
