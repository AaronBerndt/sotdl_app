import React from "react";
import {
  Card,
  CardHeader,
  GridListTileBar,
  GridListTile,
} from "@material-ui/core";

interface NavigationPanelProps {
  title: string;
}
function NavigationPanel({ title }: NavigationPanelProps) {
  return (
    <>
      <GridListTile cols={2}>
        <Card>
          <CardHeader>{title}</CardHeader>
        </Card>
      </GridListTile>
    </>
  );
}

export default NavigationPanel;
