import React from "react";
import BuildCharacterPage from "./BuildCharacterPage";
import AxiosMock from "../../utilities/AxiosMock";
import { pathData } from "../../utilities/mockData";

export default {
  title: "Pages/BuildCharacterPage",
  component: BuildCharacterPage,
};

const mock = (apiMock) => {
  apiMock.onGet("https://sotdl-api.herokuapp.com/paths").reply(200, pathData);
};

export const withComp = () => (
  <AxiosMock mock={mock}>
    <BuildCharacterPage />
  </AxiosMock>
);
