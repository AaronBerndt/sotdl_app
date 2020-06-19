import React, { useContext } from "react";
import { List } from "@material-ui/core";
import { filterByLevel } from "../../utilities";
import ChracaterPageContext from "../../context/CharacterContext";

function FeaturesBox() {
  const { features, level } = useContext(ChracaterPageContext);
  return (
    <>
      <List>
        {filterByLevel(features, level).map(
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
