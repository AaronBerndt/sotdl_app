import React from "react";
import PathPage from "./PathPage";
import AxiosMock from "../../utilities/AxiosMock";
import { pathData } from "../../utilities/mockData";

export default {
  title: "Pages/CharacterBulider/PathPage",
  component: PathPage,
};

const mock = (apiMock) => {
  apiMock.onGet("https://sotdl-api.herokuapp.com/paths").reply(200, pathData);
};

export const withComp = () => (
  <AxiosMock mock={mock}>
    <PathPage />
  </AxiosMock>
);

