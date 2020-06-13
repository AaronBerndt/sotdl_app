import React from "react";
import DiceResultSnackBar from "./DiceResultSnackBar";

export default {
  title: "Organisms/DiceRoller/DiceResultSnackBar",
  component: DiceResultSnackBar,
};

export const challengeRoll = () => (
  <DiceResultSnackBar
    rollReason="Strength"
    rollType="Challenge"
    diceResult={10}
    modifier={3}
    boonResult={0}
    baneResult={0}
  />
);

export const withBoon = () => (
  <DiceResultSnackBar
    rollReason="Strength"
    rollType="Challenge"
    diceResult={10}
    modifier={3}
    boonResult={1}
    baneResult={0}
  />
);
export const withBane = () => (
  <DiceResultSnackBar
    rollReason="Strength"
    rollType="Challenge"
    diceResult={10}
    modifier={3}
    boonResult={0}
    baneResult={3}
  />
);

export const attackRoll = () => (
  <DiceResultSnackBar
    rollReason="Long Sword"
    rollType="Attack"
    diceResult={10}
    modifier={3}
    boonResult={0}
    baneResult={0}
  />
);

export const damageRoll = () => (
  <DiceResultSnackBar
    rollReason="Long Sword"
    rollType="Damage"
    diceResult={10}
    modifier={3}
    boonResult={0}
    baneResult={0}
  />
);
