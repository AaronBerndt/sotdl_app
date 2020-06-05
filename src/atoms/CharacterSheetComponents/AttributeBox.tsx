import React from "react";
import styled from "styled-components";
import { Chip, Avatar } from "@material-ui/core";

interface AttributeBoxProps {
  name: string;
  value: number;
}

const Box = styled.div`
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
`;

const Circle = styled.span`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
`;

function AttributeBox({ name, value }: AttributeBoxProps) {
  return (
    <>
      <Box></Box>
      <Box>
        <Circle>{value}</Circle>
      </Box>
    </>
  );
}

export default AttributeBox;
