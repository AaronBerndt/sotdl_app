import React, { useContext } from "react";
import styled from "styled-components";
import ChracaterPageContext from "../../context/CharacterContext";

interface EncumbranceBoxProps {
  inventoryArray: Array<any>;
}

interface StyledParagraphProps {
  children: any;
  isEncumbered: any;
}
const StyledParagraph = styled.p`
  color: ${({ isEncumbered }: StyledParagraphProps) =>
    isEncumbered ? "red" : "green"};
`;

function EncumbranceBox({ inventoryArray }: EncumbranceBoxProps) {
  const { strength } = useContext(ChracaterPageContext);
  console.log(strength);
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
