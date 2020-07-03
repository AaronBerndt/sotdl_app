import React from "react";
import { BuildCharacterProvider } from "../../context/BuildCharacterContext";
import LastStepsPage from "../LastStepsPage/LastStepPage";
import Tabbar from "../../components/Tabbar";
import { AncestryPage } from "../AncestryPage";
import PathsPage from "../PathsPage";

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
  createTab("Scores", <div>Gear</div>),
  createTab("Equpment", <div>Equpment</div>),
  createTab("Last Steps", LastStepsPage),
];

function BuildCharacterPage() {
  return (
    <>
      <BuildCharacterProvider>
        <Tabbar tabs={tabArray}></Tabbar>
      </BuildCharacterProvider>
    </>
  );
}

export default BuildCharacterPage;
