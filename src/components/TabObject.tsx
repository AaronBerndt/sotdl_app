import React from "react";
/* import PathView from "../pages/PathsPage"; */
import AddContentPage from "../pages/AddContentPage/";
import BuildCharacterPage from "../pages/BuildCharacterPage";
import CharactersPage from "../pages/CharactersPage";
import { AncestryPage } from "../pages/AncestryPage";
import PathsPage from "../pages/PathsPage/";
import LastStepsPage from "../pages/LastStepsPage/LastStepPage";

const createTab = (name: string, view: any) => ({ name, view });
const buildCharacterPageArray = [
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

const tabArray = [
  createTab(
    "Create New Character",
    <BuildCharacterPage tabArray={buildCharacterPageArray} />
  ),
  createTab("Characters", CharactersPage),
  createTab("AddContentPage", AddContentPage),
];

export default tabArray;
