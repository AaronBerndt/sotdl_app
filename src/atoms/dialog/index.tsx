import React, { useState } from "react";
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

function DynamicDialog({ title, content, actionName, isOpen }: DialogProps) {
  const [open, setOpen] = useState(isOpen);
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button>{actionName}</Button>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DynamicDialog;
