import React from "react";
import BuildCharacterPage from "./BuildCharacterPage";
import { withComp as BuildCharacterHomePage } from "../BuildCharacterHomePage/BuildCharacterHomePage.stories";
import { levelOne as PathsPage } from "../PathsPage/PathPage.stories";
import { withContext as AncestryPage } from "../AncestryPage/AncestryPage.stories";
import { withContext as EquipmentPage } from "../EquipmentPage/EquipmentPage.stories";
import LastStepsPage from "../LastStepsPage/LastStepPage";
import ScoresPage from "../ScoresPage/ScoresPage";
import { ancestriesData, pathData } from "../../utilities/mockData";
import AxiosMock from "../../utilities/AxiosMock";

export default {
  title: "Pages/CharacterBulider/BuildCharacterPage",
  component: BuildCharacterPage,
};

const createTab = (name: string, view: any) => ({ name, view });
const ancestriesMock = (apiMock) => {
  apiMock
    .onGet("https://sotdl-api.herokuapp.com/ancestries")
    .reply(200, ancestriesData);
};

const pathMock = (apiMock) => {
  apiMock.onGet("https://sotdl-api.herokuapp.com/paths").reply(200, pathData);
};

const tabArray = [
  createTab(
    "Home",

    <AxiosMock mock={ancestriesMock}>
      <AxiosMock mock={pathMock}>
        <BuildCharacterHomePage />
      </AxiosMock>
    </AxiosMock>
  ),
  createTab("Ancestry", AncestryPage),
  createTab("Paths", PathsPage),
  createTab("Scores", ScoresPage),
  createTab("Equpment", EquipmentPage),
  createTab("Last Steps", LastStepsPage),
];

export const withComp = () => <BuildCharacterPage tabArray={tabArray} />;

