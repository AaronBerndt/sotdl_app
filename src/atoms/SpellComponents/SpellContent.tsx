import React from "react";
import { Divider, ListItemText, ListItem, List } from "@material-ui/core";
import { filterByName } from "../../utilities";

type Effect = {
  name: string;
  value: string;
};

interface SpellContentProps {
  level: number;
  tradition: string;
  description: string;
  spellProperties: Array<Effect>;
}

const ContentProperty = ({ title, content }) => {
  return (
    <div>
      <ListItem dense={true} disableGutters={true}>
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    </div>
  );
};

function SpellContent({ description, spellProperties }: SpellContentProps) {
  console.log(spellProperties);

  const returnValue = (array) => array[0].value;
  const target = returnValue(filterByName(spellProperties, ["Target"]));
  const duration = returnValue(filterByName(spellProperties, ["Duration"]));

  return (
    <>
      <Divider />
      <List disablePadding={true} dense={true}>
        <ContentProperty title="Casting Time" content="1 Round" />
        <ContentProperty
          title="Duration"
          content={duration === "0" ? "Instantaneous" : duration}
        />
        <ContentProperty title="Target" content={target} />
        <ContentProperty title="Range/Area" content="Short Range" />
        <Divider />
        <p>{description}</p>
      </List>
    </>
  );
}

export default SpellContent;

