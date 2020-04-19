import React from "react";
import PathView from "./Views/PathView";
import AncestryView from "./Views/AncestryView";

const createTab = (name: string, view: any) => ({ name, view });
const tabArray = [
  createTab(
    "Home",
    <>
      <p>Stuff</p>
    </>
  ),
  createTab("Ancestry", AncestryView),
  createTab("paths", PathView),
];

export default tabArray;
