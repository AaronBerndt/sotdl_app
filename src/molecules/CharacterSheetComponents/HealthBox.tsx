import React from "react";

interface HealthBoxProps {
  healthTotal: number;
  damage: number;
}

function HealthBox({ healthTotal, damage }: HealthBoxProps) {
  return (
    <>
      <p>{`Health: ${healthTotal}`}</p>
      <p>{`Damage: ${damage}`}</p>
      {damage === healthTotal ? <p>Make Death Saves</p> : null}
    </>
  );
}

export default HealthBox;
