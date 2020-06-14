import React from "react";
/* import PathView from "../pages/PathsPage"; */
import { AncestryPage } from "../pages/AncestryPage";
import CharacterSheetPage from "../pages/CharacterSheetPage/";

const createTab = (name: string, view: any) => ({ name, view });
const tabArray = [
  createTab(
    "Home",
    <>
      <p>Stuff</p>
    </>
  ),
  createTab("Ancestry", AncestryPage),
  createTab("ChracterSheet", CharacterSheetPage),
];

export default tabArray;
