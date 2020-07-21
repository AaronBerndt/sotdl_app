import React from "react";
import AncestryPage from "./AncestryPage";
import { ancestriesData } from "../../utilities/mockData";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBulider/AncestryPage",
  component: AncestryPage,
};

export const withContext = () =>
  withBuildCharacterContext(<AncestryPage />, {
    ancestryList: ancestriesData,
  });

export const withPickedAncestry = () =>
  withBuildCharacterContext(<AncestryPage />, {
    ancestryList: ancestriesData,
    ancestry: "Dwarf",
  });

