import React from "react";

interface HealthBoxProps {
  healthTotal: number;
  damage: number;
}

function HealthBox({ healthTotal, damage }: HealthBoxProps) {
  return (
    <>
      <p>`Health: ${healthTotal}`</p>
      <p>{`Damage: ${damage}`}</p>
    </>
  );
}

export default HealthBox;
