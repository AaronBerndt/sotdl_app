import React from "react";
import {
  ExpansionPanelSummary,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Avatar from "../Avatar/Avatar";

interface SpellPanelSummaryProps {
  name: string;
  tradition: string;
  level: number;
}

function SpellPanelSummary({ name, tradition, level }: SpellPanelSummaryProps) {
  return (
    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
      <ListItem>
        <ListItemAvatar>
          <Avatar type={tradition.toLowerCase()} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={`Level ${level}`} />
      </ListItem>
    </ExpansionPanelSummary>
  );
}

export default SpellPanelSummary;
