import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

interface PanelProps {
  title: string;
  summary?: any;
  details: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Panel({ title, summary, details }: PanelProps) {
  const { heading, secondaryHeading } = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <ListItem>
          <ListItemText primary={title} secondary={`${summary}`} />
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{details}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Panel;
