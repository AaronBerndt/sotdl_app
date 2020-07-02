import React from "react";

import Dialog from "./Dialog";
import { action } from "@storybook/addon-actions/dist/preview";

export default {
  title: "Atoms/Dialog",
  component: Dialog,
};

const mockStatus = (openStatus: boolean) => ({ open: openStatus });

export const isOpen = () => (
  <Dialog
    title="Confirm Ancestry"
    actionName="Confirm Ancestry"
    isOpen={mockStatus(true)}
    onClickFuncion={action("button-click")}
    submitOnClickFunction={action("button-click")}
  />
);

export const notOpen = () => (
  <Dialog
    title="Confirm Ancestry"
    actionName="Confirm Ancestry"
    isOpen={mockStatus(false)}
    onClickFuncion={action("button-click")}
    submitOnClickFunction={action("button-click")}
  />
);
