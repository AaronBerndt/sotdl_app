import React from "react";
import { Panel, Avatar } from "../../atoms/";

interface PathDialogContentProps {
  pathInfo: any;
  isPath?: boolean;
}
function PathDialogContent({ pathInfo, isPath }: PathDialogContentProps) {
  const {
    name,
    type,
    description,
    professions,
    features,
    characteristics,
  } = pathInfo;
  return (
    <>
      <div>
        <h1>{name}</h1>
        <Avatar type={name} />
      </div>

      <p>{type}</p>
      <p>{description}</p>
      <p>{professions}</p>

      {features.map(({ name, description, level }, i: number) => (
        <Panel
          title={name}
          summary={`Level ${level}`}
          details={description}
          key={i}
        />
      ))}
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
