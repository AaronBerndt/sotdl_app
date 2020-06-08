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
            <TextField
              label={name}
              variant="outlined"
              defaultValue={mod}
              size="small"
              disabled
            />
          </Badge>
        ) : (
          <TextField
            label={name}
            variant="outlined"
            defaultValue={value}
            size="small"
            disabled
          />
        )}
      </Button>
    </>
  );
}

export default AttributeBox;
