import React from "react";

import List from "./index";

export default {
  title: "List",
  component: List,
};

const raceArray = [
  {
    title: "Human",
    icon: "/static/images/Human.png",
  },
  {
    title: "Dwarf",
    icon: "/static/images/Dwarf.png",
  },
];

export const withRaceData = () => <List listItems={raceArray} />;

