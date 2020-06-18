import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { DropDown } from ".";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import TextField from "@material-ui/core/TextField";

const tableIcons = {
  Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <AddBox {...props} ref={ref} />
  )),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Check {...props} ref={ref} />
  )),
  Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Edit {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Search {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

interface AddContentTableProps {
  name: string;
  data: any;
  onChangeFunction: any;
}

const levelArray = [...Array(10).keys()].map((value) => ({
  name: `${value + 1}`,
}));

const convertToNameArray = (arrayOfString) =>
  arrayOfString.map((name) => ({ name }));

const characteristicsArray = convertToNameArray([
  "Strength",
  "Health",
  "Intellect",
  "Will",
  "Perception",
  "Power",
  "Size",
  "Speed",
  "Corruption",
]);
const spellproprietiesArray = convertToNameArray([
  "Target",
  "Duration",
  "Attack Roll 20+",
  "Triggered",
  "Sacrifice",
  "Permanence",
  "Requirement",
]);
const proprietiesArray = convertToNameArray([
  "Finesse",
  "Thrown",
  "Range(Short)",
  "Range(Medium)",
  "Range(Long)",
  "Uses Ammo",
  "Size",
  "Reach",
  "Cumbersome",
  "Mounted 1 Hand",
  "Defensive",
  "Requires Strength",
  "Requires Agility",
]);
const nameObject = {
  Characteristics: characteristicsArray,
  Properties: proprietiesArray,
  "Spell Proprieties": spellproprietiesArray,
};

function AddContentTable({
  name,
  data,
  onChangeFunction,
}: AddContentTableProps) {
  const label = name === "Features" ? "Description" : "Value";
  const cell = name === "Features" ? "description" : "value";
  const nameRow = {
    title: "Name",
    field: "name",
    editComponent: (props) =>
      name === "Features" ? (
        <TextField
          label="Name"
          autoFocus={true}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ) : (
        <DropDown
          label="Name"
          data={nameObject[name]}
          filterBy="name"
          onChange={props.onChange}
          autoFocus={true}
        />
      ),
  };

  return (
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
  );
}

export default AddContentTable;
