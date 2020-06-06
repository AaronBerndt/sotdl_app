import React from "react";
import SpellPanel from "./SpellPanel";

export default {
  title: "Atoms/SpellComponents/SpellPanel",
  component: SpellPanel,
};

export const withProps = () => (
  <SpellPanel name="Flense" tradition="Air" level={1} />
);
