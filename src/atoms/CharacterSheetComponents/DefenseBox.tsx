import React from "react";

interface DefenseBoxProps {
  value: number;
}

function DefenseBox({ value }: DefenseBoxProps) {
  return (
    <>
      <p>{`Defense: ${value}`}</p>
    </>
  );
}

export default DefenseBox;
