import React from "react";
import LastStepsPage from "./LastStepPage";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBuilder/LastStepsPage",
  component: LastStepsPage,
};

const withContext = (
  name,
  description,
  level,
  ancestry,
  novicePath,
  expertPath,
  masterPath,
  languages,
  profession,
  features,
  spells,
  items
) =>
  withBuildCharacterContext(<LastStepsPage />, {
    name,
    description,
    level,
    ancestry,
    novicePath,
    expertPath,
    masterPath,
    languages,
    profession,
    features,
    spells,
    items,
  });

/* export const noChoices = () => withContext(); */
/* export const withChoices = () => */
/*   withContext("Ordo", "Murder Hobo", 5, "Dwarf", "Warrior"); */
