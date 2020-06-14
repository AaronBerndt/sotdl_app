import React from "react";
import AddContentForm from "./AddContentForm";

export default {
  title: "Organisms/AddContent/AddContentForm",
  component: AddContentForm,
};

export const addPath = () => <AddContentForm contentType="Path" />;
export const addAncestry = () => <AddContentForm contentType="Ancestry" />;
export const addSpell = () => <AddContentForm contentType="Spell" />;
export const addItem = () => <AddContentForm contentType="Item" />;
