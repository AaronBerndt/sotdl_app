import React from "react";
import AddContentForm from "./AddContentForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/AddContent/AddContentForm",
  component: AddContentForm,
};

const onChangeFunction = action("button-click");

export const addPath = () => (
  <AddContentForm contentType="Path" onChangeFunction={onChangeFunction} />
);
export const addAncestry = () => (
  <AddContentForm contentType="Ancestry" onChangeFunction={onChangeFunction} />
);

export const addSpell = () => (
  <AddContentForm contentType="Spell" onChangeFunction={onChangeFunction} />
);
export const addItem = () => (
  <AddContentForm contentType="Item" onChangeFunction={onChangeFunction} />
);
