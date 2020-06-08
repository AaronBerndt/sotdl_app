import React from "react";
import { Panel, Avatar } from "../../atoms";

interface AncestryDialogContentProps {
  ancestryInfo: any;
}

function AncestryDialogContent({ ancestryInfo }: AncestryDialogContentProps) {
  const {
    name,
    description,
    languages,
    features,
    characteristics,
  } = ancestryInfo;

  return (
    <>
      <div>
        <h1>{name}</h1>
        <Avatar type={name} isLarge />
      </div>

      <p>{description}</p>
      <p>{`Languages: ${languages}`}</p>

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

export default AncestryDialogContent;
