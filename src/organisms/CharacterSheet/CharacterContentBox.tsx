import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";
import { TabPanel } from "../../atoms";
import { TabBar } from "../../molecules";
import { isZero } from "../../utilities";

interface CharacterContentBoxProps {
  children: any;
  spellArrayLength: number;
  power: number;
}

const StyledCard = styled(Card)`
  width: 583px;
  height: 600px;
`;

function CharacterContentBox({ children, power }: CharacterContentBoxProps) {
  const [currentTab, selectCurrentTab] = useState(0);
  const onChange = (e, newValue) => selectCurrentTab(newValue);
  const tabArray = isZero(power)
    ? ["Action", "Talents", "Equipment"]
    : ["Action", "Talents", "Equipment", "Spells"];
  return (
    <>
      <StyledCard>
        <TabBar
          tabArray={tabArray}
          currentTab={currentTab}
          onChangeFunction={onChange}
        />
        <CardContent>
          {children.map((child, i) => (
            <TabPanel
              value={currentTab}
              index={i}
              style={{ maxHeight: "500px", overflow: "auto" }}
            >
              {child}
            </TabPanel>
          ))}
        </CardContent>
      </StyledCard>
    </>
  );
}

export default CharacterContentBox;
