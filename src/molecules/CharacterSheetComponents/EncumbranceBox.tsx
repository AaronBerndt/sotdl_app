import React from "react";
import styled from "styled-components";
import { sumArray, filterByLevelAndName } from "../../utilities";

interface EncumbranceBoxProps {
  inventoryArray: Array<any>;
  strength: number;
}

const StyledParagraph = styled.p`
  color: ${({ isEncumbered }) => (isEncumbered ? "red" : "green")};
`;

function EncumbranceBox({ inventoryArray, strength }) {
  const itemAmount = inventoryArray.length;
  const totalCarryingWeight = strength * 2;
  const isEncumbered = itemAmount > totalCarryingWeight;

  return (
    <>
      <p>{`Items Carried: ${itemAmount} / ${totalCarryingWeight}`}</p>
      <StyledParagraph isEncumbered={isEncumbered}>
        {isEncumbered ? "Encumbered" : "Unencumbered"}
      </StyledParagraph>
    </>
  );
}

export default EncumbranceBox;
