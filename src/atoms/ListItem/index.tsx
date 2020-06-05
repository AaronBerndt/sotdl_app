import React from "react";
import styled from "styled-components";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

export type ListItem = {
  title: string;
  icon: any;
  onClickFunction?: any;
};

const StyledListItem = styled(ListItem)`
  background: gray;
  font: gray;
`;

function DynamicList({ title, icon, onClickFunction }: ListItem) {
  return (
    <>
      <StyledListItem button onClick={onClickFunction} divider>
        <ListItemAvatar>
          <Avatar src={icon} variant="square"></Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
      </StyledListItem>
    </>
  );
}

export default DynamicList;
