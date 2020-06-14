import React, { useState } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider, TextField } from "@material-ui/core";
import { DropDown } from ".";

interface AddContentTableProps {
  name: string;
  data: any;
}

const levelArray = [...Array(10).keys()].map((value) => ({
  name: `${value + 1}`,
}));

const characteristicsArray = [
  "Strength",
  "Health",
  "Intellect",
  "Will",
  "Perception",
  "Power",
  "Size",
  "Speed",
  "Corruption",
].map((name) => ({ name }));

function AddContentTable({ name, data }: AddContentTableProps) {
  const label = name === "Features" ? "Description" : "Value";
  const cell = name === "Features" ? "description" : "value";
  const nameRow =
    name === "Features"
      ? { title: "Name", field: "name" }
      : {
          title: "Name",
          field: "name",
          editComponent: (props) => (
            <DropDown
              label="Name"
              data={characteristicsArray}
              filterBy="name"
              onChange={props.onChange}
            />
          ),
        };

  const [tableData, setTableData] = useState(data);

  return (
    <MuiThemeProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(newData);
                setTableData([...tableData, newData]);

                resolve();
              }, 1000);
            }),
        }}
        columns={[
          nameRow,
          {
            title: label,
            field: cell,
          },
          {
            title: "Level",
            field: "level",
            editComponent: (props) => (
              <DropDown
                label="Level"
                data={levelArray}
                filterBy="name"
                onChange={props.onChange}
              />
            ),
          },
        ]}
        data={tableData}
        title={name}
        options={{
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
        }}
      />
    </MuiThemeProvider>
  );
}

export default AddContentTable;
