import React from "react";
import { Badge, Button } from "@material-ui/core";
import { TextField } from "../../atoms";

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
  onClickFuncion,
  withMod,
  withNoRoll,
}: AttributeBoxProps) {
  const mod = value - 10 > 0 ? `+ ${value - 10}` : value - 10;
  return (
    <>
      <Button onClick={onClickFuncion} size="small" disabled={withNoRoll}>
        {withMod ? (
          <Badge badgeContent={value} color="primary">
            <TextField name={name} value={mod} />
          </Badge>
        ) : (
          <TextField name={name} value={value} />
        )}
      </Button>
    </>
  );
}

export default AttributeBox;
