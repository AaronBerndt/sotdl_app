import React from "react";
import { Router as ReachRouter } from "@reach/router";
import AddContentPage from "./AddContentPage";
import CharactersPage from "./CharactersPage";
import BuildCharacterPage from "./BuildCharacterPage";

const createRoute = (title: string, path: string, comp: any) => ({
  title,
  path,
  component: comp,
});

const RouteObject = [
  createRoute("Create New Character", "/NewCharacter", BuildCharacterPage),
  createRoute("Characters", "/Characters", CharactersPage),
  createRoute("AddContentPage", "/AddContent", AddContentPage),
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
