import React from "react";
import { Panel, Avatar } from "../../atoms";

interface AncestryDialogContentProps {
  ancestryInfo: any;
}

function AncestryDialogContent({ ancestryInfo }: AncestryDialogContentProps) {
  const {
    name,
    description,
    starting_attributes: sa,
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
      <h1>Starting Attribute Scores</h1>
      <p>{`Strength ${sa.strength} , Agility ${sa.agility}, Intellect ${sa.intellect}, Will ${sa.will}`}</p>
      <p>{`Health:  +${sa.health} Perception: +${sa.perception} Defense: +${sa.defense}
	   Power: +${sa.power} Insanity: +${sa.insanity} Corruption: +${sa.corruption}`}</p>
      <p>{`Speed: ${sa.speed}`}</p>

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
  )
}

export default AncestryDialogContent;
