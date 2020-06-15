import React from "react";

interface TabPanelProps {
  children?: any;
  index: any;
  value: any;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      style={{ maxHeight: "500px", overflow: "auto" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index ? children : null}
    </div>
  );
}

export default TabPanel;
