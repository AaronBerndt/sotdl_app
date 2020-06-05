import React from "react";
import styled from "styled-components";
import HumanImage from "../../static/images/Human.png";
import DwarfImage from "../../static/images/Dwarf.png";
import OrcImage from "../../static/images/Orc.png";
import ChangelingImage from "../../static/images/Changeling.png";
import ClockworkImage from "../../static/images/Clockwork.png";
import GoblinImage from "../../static/images/Goblin.png";

import { Avatar } from "@material-ui/core";
interface AvatarProps {
  type: string;
  isLarge?: boolean;
}

type imageObject = {
  dwarf: any;
  human: any;
};

const imageObject = {
  dwarf: DwarfImage,
  human: HumanImage,
  goblin: GoblinImage,
  clockwork: ClockworkImage,
  orc: OrcImage,
  changeling: ChangelingImage,
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
