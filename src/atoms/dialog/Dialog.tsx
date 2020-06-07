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
  onClickFuncion: any;
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

function DynamicDialog({
  title,
  children,
  actionName,
  onClickFuncion,
  isOpen,
}: DialogProps) {
  const { open } = isOpen;

  return (
    <>
      <Dialog open={open}>
        <StyledDialogTitle>{title}</StyledDialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <StyledButton>{actionName}</StyledButton>
          <Button onClick={onClickFuncion}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DynamicDialog;
