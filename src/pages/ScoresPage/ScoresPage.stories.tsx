import React from "react";
import ScoresPage from "./ScoresPage";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBulider/ScoresPage",
  component: ScoresPage,
};

const withContext = (level: number) =>
  withBuildCharacterContext(<ScoresPage />, {
    level,
    startingScores: { strength: 10, agility: 10, will: 10, intellect: 10 },
  });

export const levelZero = () => withContext(0);
export const levelOne = () => withContext(1);
export const levelThree = () => withContext(3);
export const levelSeven = () => withContext(7);

