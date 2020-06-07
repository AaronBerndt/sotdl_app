import React from "react";
import styled from "styled-components";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export type DialogProps = {
  title: string;
  children?: any;
  actionName: string;
  isOpen: boolean;
};

const StyledDialogTitle = styled(DialogTitle)`
  background-color: #262e37;
  color: white;
`;

const StyledButton = styled(Button)`
  background-color: #96bf6b;
  color: white;
`;

function DynamicDialog({ title, children, actionName, isOpen }: DialogProps) {
  return (
    <>
      <Dialog open={isOpen}>
        <StyledDialogTitle>{title}</StyledDialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <StyledButton>{actionName}</StyledButton>
          <Button> CANCEL</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DynamicDialog;
