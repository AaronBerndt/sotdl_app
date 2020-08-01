import React from "react";
import {
  ExpansionPanelSummary,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelDetails,
  Button,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Avatar from "../Avatar/Avatar";
import SpellContent from "./SpellContent";

interface SpellPanelSummaryProps {
  name: string;
  tradition: string;
  description: string;
  spellProperties: any;
  level: number;
  isKnown: boolean;
}

function SpellPanelSummary({
  name,
  tradition,
  description,
  spellProperties,
  level,
  isKnown,
}: SpellPanelSummaryProps) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <ListItem>
          <ListItemAvatar>
            <Avatar type={tradition.toLowerCase()} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={`Level ${level} ${tradition}`}
          />
        </ListItem>
        <Button>{isKnown ? "Remove" : "Learn"}</Button>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <SpellContent
          level={level}
          tradition={tradition}
          spellProperties={spellProperties}
          description={description}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default SpellPanelSummary;

