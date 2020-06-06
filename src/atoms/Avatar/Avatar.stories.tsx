import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
};

export const dwarf = () => <Avatar type="dwarf" />;
export const human = () => <Avatar type="human" />;
export const goblin = () => <Avatar type="goblin" />;
export const clockwork = () => <Avatar type="clockwork" />;
export const orc = () => <Avatar type="orc" />;
export const changeling = () => <Avatar type="changeling" />;
export const isLarge = () => <Avatar type="dwarf" isLarge />;
