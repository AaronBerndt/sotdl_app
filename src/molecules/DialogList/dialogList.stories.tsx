import React from "react";
import DialogList from "./index";
import DwarfImage from "../../static/images/Dwarf.png";
import HumanImage from "../../static/images/Human.png";

export default {
  title: "Molecules/DialogList",
  component: DialogList,
};

export const withProps = () => (
  <DialogList
    listItemArray={[
      {
        title: "Human",
        icon: HumanImage,
      },
      {
        title: "Dwarf",
        icon: DwarfImage,
      },
    ]}
    dialogTitle="Pick Ancestry"
  />
);
