import React from "react";
import MaterialTable from "material-table";
import { DropDown } from "../../atoms";

function EquipmentTable() {
  return (
    <>
      <MaterialTable
        icons={tableIcons}
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
        columns={
          name === "Properties" || name === "Spell Properties"
            ? [
                nameRow,

                {
                  title: label,
                  field: cell,
                },
              ]
            : [
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
              ]
        }
        data={data}
        title={name}
        options={{
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
        }}
      />
    </>
  );
}

