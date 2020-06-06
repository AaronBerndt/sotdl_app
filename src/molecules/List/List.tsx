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
      {listItemArray.map(({ name }, i) => (
        <>
          <ListItem
            title={name}
            onClickFunction={() => onClickFunction(i)}
            key={i}
          />
        </>
      ))}
    </MaterialList>
  );
}

export default List;
