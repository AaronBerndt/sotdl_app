import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Card,
  Avatar,
} from "@material-ui/core";

type Item = {
  title: string;
  icon: any;
};
interface ListProps {
  listItems: Array<Item>;
}
function DynamicList({ listItems }: ListProps) {
  return (
    <>
      <List>
        {listItems.map(({ title, icon }, key) => (
          <>
            <Card>
              <ListItem key={key} button>
                <ListItemAvatar>
                  <Avatar src={icon}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} />
              </ListItem>
            </Card>
          </>
        ))}
      </List>
    </>
  );
}

export default DynamicList;
