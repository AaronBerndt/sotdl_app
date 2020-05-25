import React from "react";
import Dialog from "./index";

export default {
  title: "Dialog",
  component: Dialog,
};

export const withProps = () => (
  <Dialog
    title="Confirm Ancestry"
    content="Confirm Ancestry"
    actionName="Confirm Ancestry"
    isOpen={true}
  />
);
