import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Card,
  Avatar,
} from "@material-ui/core";

export type ListItem = {
  title: string;
  icon: any;
  onClickFunction?: any;
};
function DynamicList({ title, icon, onClickFunction }: ListItem) {
  return (
    <>
      <Card>
        <ListItem button onClick={onClickFunction}>
          <ListItemAvatar>
            <Avatar src={icon}></Avatar>
          </ListItemAvatar>
          <ListItemText primary={title} />
        </ListItem>
      </Card>
    </>
  );
}

export default DynamicList;
