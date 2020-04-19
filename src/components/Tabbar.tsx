import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";

interface TabObject {
  name: string;
  view: JSX.Element;
}
interface TabbarProps {
  tabs: TabObject[];
}

interface TabbPanelProps {
  children: JSX.Element;
  value: number;
  index: number;
}

function TabPanel({ children, value, index, ...other }: TabbPanelProps) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function Tabbar({ tabs }: TabbarProps) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event: any, newValue: number) => setCurrentTab(newValue);

  return (
    <>
      <AppBar position="static">
        <Tabs value={currentTab} onChange={handleChange}>
          {tabs.map(({ name }) => (
            <Tab label={name} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map(({ view }, i) => (
        <TabPanel value={currentTab} index={i} key={i}>
          {view}
        </TabPanel>
      ))}
    </>
  );
}

export default Tabbar;
