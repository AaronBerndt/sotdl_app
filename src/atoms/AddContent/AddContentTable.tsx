import React from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { DropDown } from ".";

interface AddContentTableProps {
  name: string;
  data: any;
  onChangeFunction: any;
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

function AddContentTable({
  name,
  data,
  onChangeFunction,
}: AddContentTableProps) {
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

  return (
    <MuiThemeProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                onChangeFunction([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                onChangeFunction([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                onChangeFunction([...dataDelete]);

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
        data={data}
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
