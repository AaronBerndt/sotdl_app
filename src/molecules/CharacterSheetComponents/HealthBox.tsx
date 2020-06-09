import React from "react";

interface HealthBoxProps {
  healthTotal: number;
}

function HealthBox({ healthTotal }: HealthBoxProps) {
  return (
    <>
      <p>{`Health: ${healthTotal}`}</p>
    </>
  );
}

export default HealthBox;
