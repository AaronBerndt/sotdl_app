import React from "react";
import Dialog from "./index";

export default {
  title: "Atoms/Dialog",
  component: Dialog,
};

export const isOpen = () => (
  <Dialog
    title="Confirm Ancestry"
    actionName="Confirm Ancestry"
    isOpen={true}
  />
);

export const notOpen = () => (
  <Dialog
    title="Confirm Ancestry"
    actionName="Confirm Ancestry"
    isOpen={false}
  />
);
