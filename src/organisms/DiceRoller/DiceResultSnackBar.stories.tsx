import React from "react";
import DiceResultSnackBar from "./DiceResultSnackBar";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Organisms/DiceRoller/DiceResultSnackBar",
  component: DiceResultSnackBar,
};

const withContext = (
  rollReason,
  rollType,
  diceResult,
  extraNumber,
  baneResult,
  boonResult,
  modifier
) =>
  withCharacterContext(<DiceResultSnackBar />, {
    modifier,
    rollReason,
    rollType,
    diceResult,
    extraNumber,
    baneResult,
    boonResult,
  });

export const challengeRoll = () =>
  withContext("Strength", "Challenge", 10, 3, 0, 0, 0);

export const withBoon = () =>
  withContext("Strength", "Challenge", 10, 3, 1, 0, 0);

export const withBane = () =>
  withContext("Strength", "Challenge", 10, 3, 0, 1, 0);

export const attackRoll = () =>
  withContext("Long Sword", "Attack", 10, 0, 0, 0, 0);

export const damageRoll = () =>
  withContext("Long Sword", "Damage", 10, 0, 0, 0, 0);

export const damageRollWithExtraNumber = () =>
  withContext("Long Sword", "Damage", 10, 3, 0, 0, 0);

export const damageRollWithExtraNumberAndMod = () =>
  withContext("Long Sword", "Damage", 10, 3, 0, 0, 3);

export const damageRollWithAndMod = () =>
  withContext("Long Sword", "Damage", 10, 0, 0, 0, 3);
