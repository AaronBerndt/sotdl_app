import React, { useContext } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { Form } from "react-final-form";
import { FormDropdown } from "../../atoms";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";

function EquipmentPage() {
  const { setItems } = useContext(BuildCharacterContext);

  const onSubmit = (values) => {
    const { weapons, armor } = values;
    const itemObject = {
      weapons,
      armor,
      other: [
        "Backpack",
        "Rations",
        "Waterskin",
        "Tinderbox",
        "Torch",
        "Torch",
        "Coil of Rope",
        "Healing Potion",
      ],
      money: {
        bits: 0,
        copper: 0,
        silver: 0,
        gold: 0,
      },
    };
    setItems(itemObject);
  };

  const armorArray = [{ name: "Plate" }, { name: "Sheild" }];
  const weaponArray = [{ name: "Long Sword" }, { name: "Great Sword" }];
  return (
    <div>
      <Card>
        <CardContent>
          <Form
            onSubmit={onSubmit}
            initialValues={{ armor: [], weapons: [] }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <>
                <FormDropdown
                  label="Weapon"
                  name="weapons"
                  data={weaponArray}
                  multiple={true}
                />
                <FormDropdown
                  label="Armor"
                  name="armor"
                  data={armorArray}
                  multiple={true}
                />
                <h4>Other Gear</h4>
                <p>
                  a backpack, a week of rations, a waterskin, a tinderbox, 2
                  torches, a coil of rope, a healing potion,
                </p>

                <h4>Money</h4>
                <CardActions>
                  <Button onClick={() => handleSubmit()}>Submit</Button>
                </CardActions>
              </>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default EquipmentPage;

