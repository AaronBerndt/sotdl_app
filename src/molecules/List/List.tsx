import React from "react";
import { ListItem } from "../../atoms";
import { List as MaterialList } from "@material-ui/core";

interface ListProps {
  listItemArray: Array<any>;
  onClickFunction: any;
}

function List({ listItemArray, onClickFunction }: ListProps) {
  return (
    <MaterialList>
      {listItemArray.map(({ name, secondaryText }, i) => (
        <>
          <ListItem
            title={name}
            onClickFunction={() => onClickFunction(i)}
            secondaryText={secondaryText}
            key={i}
          />
        </>
      ))}
    </MaterialList>
  );
}

export default List;
