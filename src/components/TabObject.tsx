import React from "react";
/* import PathView from "../pages/PathsPage"; */
import AddContentPage from "../pages/AddContentPage/";
import BuildCharacterPage from "../pages/BuildCharacterPage";
import CharactersPage from "../pages/CharactersPage";

const createTab = (name: string, view: any) => ({ name, view });
const tabArray = [
  createTab("Create New Character", BuildCharacterPage),
  createTab("Characters", CharactersPage),
  createTab("AddContentPage", AddContentPage),
];

export default tabArray;
