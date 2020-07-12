import React from "react";
import PathPage from "./PathPage";
import AxiosMock from "../../utilities/AxiosMock";
import { pathData } from "../../utilities/mockData";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBulider/PathPage",
  component: PathPage,
};

const mock = (apiMock) => {
  apiMock.onGet("https://sotdl-api.herokuapp.com/paths").reply(200, pathData);
};

const withContext = (level: number) =>
  withBuildCharacterContext(
    <AxiosMock mock={mock}>
      <PathPage />
    </AxiosMock>,
    { level }
  );

export const levelZero = () => withContext(0);
export const levelOne = () => withContext(1);
export const levelThree = () => withContext(3);
export const levelFour = () => withContext(4);
export const levelSeven = () => withContext(7);

