import React, { useState } from "react";
import Panel from "../Panel";
import styled from "styled-components";

/* type Ancestry = { */
/*   name: string; */
/*   description: string; */
/*   starting_attributes: object<any> */
/* }; */

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
  } = ancestryInfo;

  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <h1>Starting Attribute Scores</h1>
      <p>{`Strength ${sa.strength} , Agility ${sa.agility}, Intellect ${sa.intellect}, Will ${sa.will}`}</p>
      <p>{`Health:  +${sa.health} Perception: +${sa.perception} Defense: +${sa.defense}
	   Power: +${sa.power} Insanity: +${sa.insanity} Corruption: +${sa.corruption} Damage: +${sa.damage}`}</p>
      <p>{`Speed: ${sa.speed}`}</p>

      {features.map(({ name, description, level }, i: number) => (
        <Panel
          title={name}
          summary={`Level ${level}`}
          details={description}
          key={i}
        />
      ))}
    </>
  );
}

export default AncestryDialogContent;
