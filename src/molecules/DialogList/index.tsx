import React, { useState } from "react";
import ListItem, { ListItem as ListItemType } from "../../atoms/ListItem";
import Dialog from "../../atoms/Dialog";
import { List } from "@material-ui/core";

interface DialogListProps {
  listItemArray: Array<ListItemType>;
  dialogTitle: string;
}

function DialogList({ listItemArray, dialogTitle }: DialogListProps) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <List>
      {listItemArray.map(({ title }, i) => (
        <>
          <ListItem
            title={title}
            onClickFunction={() => setOpen(true)}
            key={i}
          />

          <Dialog title={dialogTitle} content="" actionName="" isOpen={open} />
        </>
      ))}
    </List>
  );
}

export default DialogList;
