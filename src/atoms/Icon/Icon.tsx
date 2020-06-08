import React from "react";
import { Icon as MaterialIcon } from "@material-ui/core";
import ShieldIcon from "../../static/images/shield.svg";
import HealthIcon from "../../static/images/heart.svg";

const svgObject = {
  health: ShieldIcon,
  defense: HealthIcon,
};

interface IconProps {
  type: string;
}

function Icon({ type }: IconProps) {
  console.log(svgObject[type]);
  return (
    <MaterialIcon>
      <img src={svgObject[type]} />
    </MaterialIcon>
  );
}

export default Icon;
