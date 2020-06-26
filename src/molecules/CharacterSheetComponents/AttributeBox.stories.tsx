import React from "react";
import AttributeBox from "./AttributeBox";

export default {
  title: "Molecules/CharacterSheetComponents/AttributeBox",
  component: AttributeBox,
};

export const withZero = () => (
  <AttributeBox name="Will" value={10} withMod={true} withNoRoll={false} />
);
export const withPostive = () => (
  <AttributeBox name="Strength" value={11} withMod={true} withNoRoll={false} />
);
export const withNegative = () => (
  <AttributeBox name="Intellect" value={8} withMod={true} withNoRoll={false} />
);

export const withNoMod = () => (
  <AttributeBox name="Insanity" value={1} withMod={false} withNoRoll={false} />
);

export const withNoModOrRoll = () => (
  <AttributeBox name="Power" value={1} withMod={false} withNoRoll={true} />
);
