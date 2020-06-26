import React from "react";
import BBBox from "./BBBox";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Organisms/DiceRoller/BBBox",
  component: BBBox,
};

const withContext = (boons: number, banes: number) =>
  withCharacterContext(<BBBox />, {
    boonAmount: boons,
    baneAmount: banes,
  });

export const isZero = () => withContext(0, 0);
export const withBoon = () => withContext(1, 0);
export const withBane = () => withContext(0, 1);
