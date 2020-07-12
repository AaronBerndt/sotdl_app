import React from "react";
import styled from "styled-components";
import { Panel } from "../../atoms/";
import { groupBy } from "lodash";
import { sumArray, lengthIsOne } from "../../utilities";

interface PathDialogContentProps {
  pathInfo: any;
  isPath?: boolean;
}

const StyledHeader = styled.h1`
position:: ''
`;

function PathDialogContent({ pathInfo, isPath }: PathDialogContentProps) {
  const {
    name,
    description,
    professions,
    features,
    characteristics,
  } = pathInfo;

  return (
    <>
      <div>
        <StyledHeader>{name}</StyledHeader>
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

      {Object.entries(groupBy(characteristics, ({ name }) => name)).map(
        (array: any, i) => {
          const name = array[0];
          const arrayValue = array[1];

          const levelArray = arrayValue
            .map(({ level }: any) => level)
            .join(",");

          const valueArray = arrayValue.map(({ value }: any) => value);

          const formula = valueArray.join("+");

          return (
            <Panel
              title={name}
              summary={`Level ${levelArray}`}
              details={
                lengthIsOne(valueArray)
                  ? `+ ${valueArray}`
                  : `${formula} = ${sumArray(valueArray)}`
              }
              key={i}
            />
          );
        }
      )}
    </>
  );
}

export default PathDialogContent;

