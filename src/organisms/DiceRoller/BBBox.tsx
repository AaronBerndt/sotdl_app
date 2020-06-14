import React, { useReducer } from "react";
import styled from "styled-components";
import { TextField as MaterialTextField, Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  color: ${({ inputType }) => {
    return inputType === "boon" ? "lightBlue" : "red ";
  }})}
`;

function reducer(state, action) {
  const actionObject = {
    "add boon": () => (state >= 0 ? state + 1 : 1),
    "add bane": () => (state <= 0 ? state - 1 : -1),
    reset: () => 0,
  };

  return actionObject[action.type]();
}

function BBBox() {
  const [state, dispatch] = useReducer(reducer, 0);
  const name = state === 0 ? "Banes/Boons" : state >= 1 ? "Boon" : "Bane";
  return (
    <>
      <MaterialTextField
        label={name}
        variant="outlined"
        defaultValue={state}
        size="small"
        disabled
      />

      <StyledButton inputType="boon">Add Boon</StyledButton>
      <StyledButton inputType="bane">Add Bane</StyledButton>
    </>
  );
}

export default BBBox;
