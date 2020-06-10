import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";
import { TabPanel } from "../../atoms";
import { TabBar } from "../../molecules";

interface FeaturesBoxProps {
  children: any;
}

const StyledCard = styled(Card)`
  width: 583px;
  height: 600px;
`;

function CharacterContentBox({ children }: FeaturesBoxProps) {
  const [currentTab, selectCurrentTab] = useState(0);
  const onChange = (e, newValue) => selectCurrentTab(newValue);
  return (
    <>
      <StyledCard>
        <TabBar
          tabArray={["Talents", "Gear", "Spells"]}
          currentTab={currentTab}
          onChangeFunction={onChange}
        />
        <CardContent>
          {children.map((child, i) => (
            <TabPanel value={currentTab} index={i}>
              {child}
            </TabPanel>
          ))}
        </CardContent>
      </StyledCard>
    </>
  );
}

export default CharacterContentBox;
