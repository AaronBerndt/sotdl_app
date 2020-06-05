import React from "react";
import DialogList from "./index";

export default {
  title: "Molecules/DialogList",
  component: DialogList,
};

export const withProps = () => (
  <DialogList
    listItemArray={[
      {
        title: "Human",
      },
      {
        title: "Dwarf",
      },
    ]}
    dialogTitle="Pick Ancestry"
  />
);
