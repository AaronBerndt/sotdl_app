import React from "react";
import DialogList from "./index";

export default {
  title: "DialogList",
  component: DialogList,
};

export const withProps = () => (
  <DialogList
    listItemArray={[
      {
        title: "Human",
        icon: "../../static/images/Human.png",
      },
    ]}
    dialogTitle="Pick Ancestry"
  />
);
