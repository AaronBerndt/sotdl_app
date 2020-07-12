import React from "react";
import BuildCharacterPage from "./BuildCharacterPage";
import { withComp as BuildCharacterHomePage } from "../BuildCharacterHomePage/BuildCharacterHomePage.stories";
import { levelOne as PathsPage } from "../PathsPage/PathPage.stories";
import { withComp as AncestryPage } from "../AncestryPage/AncestryPage.stories";
import LastStepsPage from "../LastStepsPage/LastStepPage";
import ScoresPage from "../ScoresPage/ScoresPage";

export default {
  title: "Pages/CharacterBulider/BuildCharacterPage",
  component: BuildCharacterPage,
};

const createTab = (name: string, view: any) => ({ name, view });
const tabArray = [
  createTab("Home", BuildCharacterHomePage),
  createTab("Ancestry", AncestryPage),
  createTab("Paths", PathsPage),
  createTab("Scores", ScoresPage),
  createTab("Equpment", <div>Equpment</div>),
  createTab("Last Steps", LastStepsPage),
];

export const withComp = () => <BuildCharacterPage tabArray={tabArray} />;

