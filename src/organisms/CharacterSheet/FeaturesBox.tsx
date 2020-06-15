import React from "react";
import { List } from "@material-ui/core";
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
          ({ name, description, page, book }, i: number) => (
            <div key={i}>
              <h4>{`${name} ${book}, pg. ${page}`}</h4>
              <p>{description}</p>
            </div>
          )
        )}
      </List>
    </>
  );
}

export default FeaturesBox;
