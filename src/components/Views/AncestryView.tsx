import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  DialogActions,
  Button,
  Card,
} from "@material-ui/core";

interface AncestryDialogProps {
  name: string;
}

function AncestryDialog({ name }: AncestryDialogProps) {
  const [open, setOpen] = useState(false);
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

      <Card>
        <ListItem button onClick={() => setOpen(true)}>
          {name}
        </ListItem>
      </Card>
    </>
  );
}

function AncestryView() {
  const raceArray = [
    {
      name: "Human",
    },
  ];
  return (
    <>
      <List>
        {raceArray.map(({ name }) => (
          <AncestryDialog name={name} />
        ))}
      </List>
    </>
  );
}

export default AncestryView;
