import React from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
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
  createTab("Last Steps", <div>Last Steps</div>),
];

function BuildCharacterPage() {
  return (
    <>
      <BuildCharacterContext.Provider values={{ name: "Ordo" }}>
        <Tabbar tabs={tabArray}></Tabbar>
      </BuildCharacterContext.Provider>
    </>
  );
}

export default BuildCharacterPage;
