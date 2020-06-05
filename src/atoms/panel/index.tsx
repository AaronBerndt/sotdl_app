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
  const [expanded, setExpanded] = useState(false);

  const onClick = () => setExpanded(!expanded);

  return (
    <ExpansionPanel expanded={expanded} onClick={onClick}>
      <ExpansionPanelSummary>
        <Typography className={heading}>{title}</Typography>
        <Typography className={secondaryHeading}>{summary}</Typography>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{details}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Panel;
