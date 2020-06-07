import React from "react";
import AncestryPage from "./AncestryPage";
import AxiosMock from "../../utilities/AxiosMock";
import { ancestriesData } from "../../utilities/mockData";

export default {
  title: "Pages/AncestryPage",
  component: AncestryPage,
};

const mock = (apiMock) => {
  apiMock.onGet("http://localhost:3000/ancestries").reply(200, ancestriesData);
};

export const withComp = () => (
  <AxiosMock mock={mock}>
    <AncestryPage />
  </AxiosMock>
);
