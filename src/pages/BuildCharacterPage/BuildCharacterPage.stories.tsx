import React from "react";
import BuildCharacterPage from "./BuildCharacterPage";
import { withComp as PathsPage } from "../PathsPage/PathPage.stories";
import { withComp as AncestryPage } from "../AncestryPage/AncestryPage.stories";
import LastStepsPage from "../LastStepsPage/LastStepPage";

export default {
  title: "Pages/BuildCharacterPage",
  component: BuildCharacterPage,
};

const createTab = (name: string, view: any) => ({ name, view });
const tabArray = [
  createTab(
    "Home",
    <>
      <p>Stuff</p>
    </>
  ),
  createTab("Ancestry", AncestryPage),
  createTab("Paths", PathsPage),
  createTab("Scores", <div>Scores</div>),
  createTab("Equpment", <div>Equpment</div>),
  createTab("Last Steps", LastStepsPage),
];

export const withComp = () => <BuildCharacterPage tabArray={tabArray} />;
