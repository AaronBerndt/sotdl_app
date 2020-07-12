import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import { ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";

export type ListItemType = {
  title: string;
  onClickFunction?: any;
  secondaryText?: string;
  disabled?: boolean;
};

const StyledListItem = styled(ListItem)`
  background: gray;
  font: gray;
`;

function DynamicListItem({
  title,
  onClickFunction,
  secondaryText,
  disabled,
}: ListItemType) {
  return (
    <>
      <StyledListItem
        button
        onClick={onClickFunction}
        divider
        disabled={disabled}
      >
        <ListItemAvatar>
          <Avatar type={title.toLowerCase()} />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={secondaryText} />
      </StyledListItem>
    </>
  );
}

export default DynamicListItem;

