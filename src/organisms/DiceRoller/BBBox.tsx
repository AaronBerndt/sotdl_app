import React, { useContext } from "react";
import styled from "styled-components";
import { TextField as MaterialTextField, Button } from "@material-ui/core";
import { isZero } from "../../utilities";
import DiceRollContext from "../../context/DiceRollContext";

const BaneButton = styled(Button)`
  background-color: red;
`;

const BoonButton = styled(Button)`
  background-color: lightBlue;
`;

const BBTextField = styled(MaterialTextField)`
  color: "red";
`;

function BBBox() {
  const {
    boonAmount,
    baneAmount,
    addBoons,
    addBanes,
    resetBBCount,
  } = useContext(DiceRollContext);
  const defaultAmount = isZero(boonAmount + baneAmount)
    ? 0
    : boonAmount > baneAmount
    ? boonAmount
    : baneAmount;

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

      <BoonButton onClick={() => addBoons()}>Add Boon</BoonButton>
      <BoonButton onClick={() => resetBBCount()}>Reset</BoonButton>
      <BaneButton onClick={() => addBanes()}>Add Bane</BaneButton>
    </>
  );
}

export default BBBox;
