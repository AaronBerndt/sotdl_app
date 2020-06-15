import React from "react";
import styled from "styled-components";
import { Panel, Avatar } from "../../atoms/";

interface PathDialogContentProps {
  pathInfo: any;
  isPath?: boolean;
}

const StyledHeader = styled.h1`
position:: 'abosolute'
`;

const StyledAvatar = styled(Avatar)`
position:: 'abosolute'
left: 50%;
`;

function PathDialogContent({ pathInfo, isPath }: PathDialogContentProps) {
  const {
    name,
    description,
    professions,
    features,
    characteristics,
  } = pathInfo;

  characteristics.map(({ name, value, level }, i: number) => (
    <Panel
      title={name}
      summary={`Level ${level}`}
      details={`+ ${value}`}
      key={i}
    />
  ));
  return (
    <>
      <div>
        <StyledHeader>{name}</StyledHeader>
        <StyledAvatar type={name} isLarge />
      </div>

      <p>{description}</p>

      {features.map(({ name, description, level }, i: number) => (
        <Panel
          title={name}
          summary={`Level ${level}`}
          details={description}
          key={i}
        />
      ))}
      <Panel title={"Professitons"} summary={`Level 1`} details={professions} />

      {characteristics.map(({ name, value, level }, i: number) => (
        <Panel
          title={name}
          summary={`Level ${level}`}
          details={`+ ${value}`}
          key={i}
        />
      ))}
    </>
  );
}

export default PathDialogContent;
