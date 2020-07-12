import React from "react";
import AncestryPage from "./AncestryPage";
import AxiosMock from "../../utilities/AxiosMock";
import { ancestriesData } from "../../utilities/mockData";

export default {
  title: "Pages/CharacterBulider/AncestryPage",
  component: AncestryPage,
};

const mock = (apiMock) => {
  apiMock
    .onGet("https://sotdl-api.herokuapp.com/ancestries")
    .reply(200, ancestriesData);
};

export const withComp = () => (
  <AxiosMock mock={mock}>
    <AncestryPage />
  </AxiosMock>
);

