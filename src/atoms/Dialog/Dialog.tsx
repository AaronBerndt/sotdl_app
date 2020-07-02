import React from "react";
import styled from "styled-components";

import {
  Dialog as MaterialDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export type DialogProps = {
  title: string;
  children?: any;
  actionName: string;
  onClickFuncion: any;
  submitOnClickFunction: any;
  isOpen: any;
};
const StyledDialogTitle = styled(DialogTitle)`
  background-color: #262e37;
  color: white;
`;

const StyledButton = styled(Button)`
  background-color: #96bf6b;
  color: white;
`;

function Dialog({
  title,
  children,
  actionName,
  onClickFuncion,
  submitOnClickFunction,
  isOpen,
}: DialogProps) {
  const { open } = isOpen;

  return (
    <>
      <MaterialDialog open={open}>
        <StyledDialogTitle>{title}</StyledDialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <StyledButton onClick={submitOnClickFunction}>
            {actionName}
          </StyledButton>
          <Button onClick={onClickFuncion}>CANCEL</Button>
        </DialogActions>
      </MaterialDialog>
    </>
  );
}

export default Dialog;
