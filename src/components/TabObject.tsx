import React from "react";
/* import PathView from "../pages/PathsPage"; */
import { AncestryPage } from "../pages/AncestryPage";
import CharacterSheetPage from "../pages/CharacterSheetPage/";
import PathsPage from "../pages/PathsPage/";
import AddContentPage from "../pages/AddContentPage/";

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
  createTab("ChracterSheet", CharacterSheetPage),
  createTab("Add Content", AddContentPage),
];

export default tabArray;
