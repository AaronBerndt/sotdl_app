import React from "react";
import TabPanel from "./TabPanel";

export default {
  title: "Atoms/TabPanel",
  component: TabPanel,
};

export const notHidden = () => (
  <TabPanel value={1} index={1}>
    <p> Hello </p>
  </TabPanel>
);

export const hidden = () => (
  <TabPanel value={2} index={1}>
    <p> Hello </p>
  </TabPanel>
);
