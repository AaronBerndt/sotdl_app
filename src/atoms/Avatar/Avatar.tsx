import React from "react";
import HumanImage from "../../static/images/Human.png";
import DwarfImage from "../../static/images/Dwarf.png";
import OrcImage from "../../static/images/Orc.png";
import ChangelingImage from "../../static/images/Changeling.png";
import ClockworkImage from "../../static/images/Clockwork.png";
import GoblinImage from "../../static/images/Goblin.png";

import { Avatar, makeStyles, Theme, createStyles } from "@material-ui/core";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: "100px",
      height: "100px",
    },
  })
);

function DynamicAvatar({ type, isLarge }: AvatarProps) {
  const { large } = useStyles();
  const image = imageObject[type];

  return image === undefined ? (
    <Avatar className={isLarge ? large : ""} variant="square" />
  ) : (
    <Avatar
      className={isLarge ? large : ""}
      src={imageObject[type.toLowerCase()]}
      variant="square"
    />
  );
}

export default DynamicAvatar;
