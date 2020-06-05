import React, { useState } from "react";
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
  content: string;
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

function DynamicDialog({ title, content, actionName, isOpen }: DialogProps) {
  const [open, setOpen] = useState(isOpen);
  return (
    <>
      <Dialog open={open}>
        <StyledDialogTitle>{title}</StyledDialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <StyledButton>{actionName}</StyledButton>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DynamicDialog;
