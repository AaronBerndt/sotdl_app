import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardContent, List } from "@material-ui/core";
import { filterByLevel } from "../../utilities";

interface FeaturesBoxProps {
  featuresArray: any;
  level: number;
}

function FeaturesBox({ featuresArray, level }: FeaturesBoxProps) {
  return (
    <>
      <List>
        {filterByLevel(featuresArray, level).map(
          ({ name, description, page, book }, i) => (
            <>
              <h4>{`${name} ${book}, pg. ${page}`}</h4>
              <p>{description}</p>
            </>
          )
        )}
      </List>
    </>
  );
}

export default FeaturesBox;
