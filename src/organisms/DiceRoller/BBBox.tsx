import React from "react";
import styled from "styled-components";
import { TextField as MaterialTextField, Button } from "@material-ui/core";
import { isZero } from "../../utilities";

const BaneButton = styled(Button)`
  background-color: red;
`;

const BoonButton = styled(Button)`
  background-color: lightBlue;
`;

const BBTextField = styled(MaterialTextField)`
  color: "red";
`;

interface BBBoxProps {
  boonAmount: number;
  baneAmount: number;
  boonOnClick: any;
  baneOnClick: any;
}
function BBBox({
  boonAmount,
  baneAmount,
  boonOnClick,
  baneOnClick,
}: BBBoxProps) {
  const defaultAmount = isZero(boonAmount + baneAmount)
    ? 0
    : boonAmount > baneAmount
    ? boonAmount
    : baneAmount;

  console.log(defaultAmount);
  return (
    <>
      <BBTextField
        label="Boon/Banes"
        variant="outlined"
        defaultValue={0}
        value={defaultAmount}
        size="small"
        disabled
      />

      <BoonButton onClick={() => boonOnClick()}>Add Boon</BoonButton>
      <BaneButton onClick={() => baneOnClick()}>Add Bane</BaneButton>
    </>
  );
}

export default BBBox;
