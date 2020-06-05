import React, { useState } from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
      <ExpansionPanelSummary>
        <Typography className={heading}>{title}</Typography>
        <Typography className={secondaryHeading}>{summary}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{details}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Panel;
