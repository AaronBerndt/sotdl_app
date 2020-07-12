import React from "react";
import ScoresPage from "./ScoresPage";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBulider/ScoresPage",
  component: ScoresPage,
};

const withContext = (level: number, isHuman?: boolean) =>
  withBuildCharacterContext(<ScoresPage />, {
    level,
    ancestry: isHuman ? "Human" : "Dwarf",
    startingScores: { strength: 10, agility: 10, will: 10, intellect: 10 },
  });

export const levelZero = () => withContext(0);
export const isHumanZero = () => withContext(0, true);
export const isHumanOne = () => withContext(1, true);
export const levelOne = () => withContext(1);
export const levelThree = () => withContext(3);
export const levelSeven = () => withContext(7);

