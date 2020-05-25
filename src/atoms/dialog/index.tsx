import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

interface DialogProps {
  title: string;
  content: string;
  actionName: string;
}
function DynamicDialog({ title, content, actionName }: DialogProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Confirm Ancestry</DialogTitle>
        <DialogContent>Confirm Ancestry</DialogContent>
        <DialogActions>
          <Button>CHOOSE ANCESTRY</Button>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DynamicDialog;
