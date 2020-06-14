import React, { useState } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";

interface AddContentTableProps {
  name: string;
  data: any;
}

const levelData = [...Array(10).keys()].map((value) => ({
  name: `${value + 1}`,
}));

function AddContentTable({ name, data }: AddContentTableProps) {
  const label = name === "Features" ? "Description" : "Value";
  const cell = name === "Features" ? "description" : "value";
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
                setTableData([...data, newData]);

                resolve();
              }, 1000);
            }),
        }}
        columns={[
          {
            title: "Name",
            field: "name",
          },
          {
            title: label,
            field: cell,
          },
          {
            title: "Level",
            field: "level",
          },
        ]}
        data={tableData}
        title=""
        options={{
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
        }}
      />
    </MuiThemeProvider>
  );
}

export default AddContentTable;
