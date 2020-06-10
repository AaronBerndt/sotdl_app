import React from "react";
import styled from "styled-components";
import { sumArray, filterByLevelAndName } from "../../utilities";

interface EncumbranceBoxProps {
  itemArray: Array<any>;
  characteristicsArray: Array<any>;
  level: number;
}

const StyledParagraph = styled.p`
  color: ${({ isEncumbered }) => (isEncumbered ? "red" : "green")};
`;

function EncumbranceBox({ itemArray, characteristicsArray, level }) {
  const strength = sumArray(
    filterByLevelAndName(characteristicsArray, "Strength", level).map(
      ({ value }) => value
    )
  );

  const itemAmount = itemArray.length;
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
