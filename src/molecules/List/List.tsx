import React from "react";
import { ListItem } from "../../atoms";
import { List as MaterialList } from "@material-ui/core";

interface ListProps {
  listItemArray: Array<any>;
  onClickFunction: any;
  isDisabled?: any;
}

function List({ listItemArray, onClickFunction, isDisabled }: ListProps) {
  return (
    <MaterialList>
      {listItemArray.map(({ name, secondaryText }, i) => (
        <>
          <ListItem
            title={name}
            onClickFunction={() => onClickFunction(i, name)}
            secondaryText={secondaryText}
            disabled={isDisabled(name)}
            key={i}
          />
        </>
      ))}
    </MaterialList>
  );
}

export default List;

