import React from "react";
import { Badge, TextField, Button } from "@material-ui/core";

interface AttributeBoxProps {
  name: string;
  value: number;
  onClickFuncion: any;
  withMod: boolean;
  withNoRoll: boolean;
}

function AttributeBox({
  name,
  value,
}: AttributeBoxProps) {
  return (
    <>

      <TextField
        label={name}
        variant="outlined"
        defaultValue={value}
        size="small"
        disabled
      />
      )}
    </>
  );
}

export default AttributeBox;
