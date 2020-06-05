import React from "react";
import styled from "styled-components";
import HumanImage from "../../static/images/Human.png";
import DwarfImage from "../../static/images/Dwarf.png";

import { Avatar } from "@material-ui/core";
interface AvatarProps {
  type: string;
  isLarge?: boolean;
}

const imageObject = {
  dwarf: DwarfImage,
  human: HumanImage,
};

const StyledAvatar = styled(Avatar)`
width:  100px
height: 100px
`;

function DynamicAvatar({ type, isLarge }: AvatarProps) {
  return (
    <StyledAvatar
      src={imageObject[type.toLowerCase()]}
      variant="square"
      isLarge={isLarge}
    />
  );
}

export default DynamicAvatar;
