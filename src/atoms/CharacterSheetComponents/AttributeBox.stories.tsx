import React from "react";
import AttributeBox from "./AttributeBox";

export default {
  title: "Atoms/CharacterSheetComponents/AttributeBox",
  component: AttributeBox,
};

export const withProps = () => <AttributeBox name="Will" value={10} />;
