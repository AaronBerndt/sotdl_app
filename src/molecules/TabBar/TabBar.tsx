import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";

interface TabBarProps {
  tabArray: any;
  currentTab: number;
  onChangeFunction: any;
}

function TabBar({ tabArray, currentTab, onChangeFunction }: TabBarProps) {
  return (
    <AppBar position="static" color="default">
      <Tabs value={currentTab} onChange={onChangeFunction}>
        {tabArray.map((tabName: string, i: number) => (
          <Tab label={tabName} key={i} />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default TabBar;
