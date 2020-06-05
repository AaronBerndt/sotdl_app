import React from "react";
import { Divider } from "@material-ui/core";

type Effect = {
  name: string;
  description: string;
};

interface SpellContentProps {
  level: number;
  tradition: string;
  characteristics: any;
  description: string;
  extraEffects: Array<Effect>;
}
function SpellContent({
  level,
  tradition,
  characteristics,
  description,
  extraEffects,
}: SpellContentProps) {
  const { taget, duration } = characteristics;
  return (
    <>
      <p>{`Level ${level} ${tradition}`}</p>
      <Divider />
      <p>{`Casting Time: 1 Action`}</p>
      <p>{`Duration: ${duration === 0 ? "Instantaneous" : duration}`}</p>
      <Divider />
      <p>{description}</p>
      <Divider />
    </>
  );
}

export default SpellContent;
