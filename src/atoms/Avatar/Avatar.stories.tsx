import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
};

export const dwarf = () => <Avatar type="dwarf" />;
export const human = () => <Avatar type="human" />;
