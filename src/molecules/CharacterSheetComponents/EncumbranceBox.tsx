import React from "react";
import styled from "styled-components";

interface EncumbranceBoxProps {
  inventoryArray: Array<any>;
  strength: number;
}

interface StyledParagraphProps {
  children: any;
  isEncumbered: any;
}
const StyledParagraph = styled.p`
  color: ${({ isEncumbered }: StyledParagraphProps) =>
    isEncumbered ? "red" : "green"};
`;

function EncumbranceBox({ inventoryArray, strength }: EncumbranceBoxProps) {
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
