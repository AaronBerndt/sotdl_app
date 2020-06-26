import React from "react";
import { Router as ReachRouter } from "@reach/router";
import AddContentPage from "./AddContentPage";
import { AncestryPage } from "./AncestryPage";
import PathsPage from "./PathsPage";
import CharactersPage from "./CharactersPage";
import CharacterSheetPage from "./CharacterSheetPage";

const createRoute = (title: string, path: string, comp: any) => ({
  title,
  path,
  component: comp,
});

const RouteObject = [
  createRoute("Ancestry", "/Ancestry", AncestryPage),
  createRoute("Paths", "/Paths", PathsPage),
  createRoute("Characters", "/Characters", CharactersPage),
  createRoute("AddContentPage", "/AddContent", AddContentPage),
  createRoute("CharacterSheetPage", "/CharacterSheet", CharacterSheetPage),
];
function Router() {
  return (
    <ReachRouter>
      {RouteObject.map(({ path, component: RouteComponent }) => (
        <RouteComponent path={path} disabled />
      ))}
    </ReachRouter>
  );
}

export default Router;
