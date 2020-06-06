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
      {listItemArray.map(({ title }, i) => (
        <>
          <ListItem title={title} onClickFunction={onClickFunction} key={i} />
        </>
      ))}
    </MaterialList>
  );
}

export default List;
