import React, { useState } from "react";
import { DropDown, DataPreview } from "../../atoms";
import { AddContentForm } from "../../organisms";

function AddContentPage() {
  const [contentData, setContentData] = useState({});
  const [contentType, setContentType] = useState("");
  const typeArray = ["Ancestry", "Path", "Spell", "Item"].map((name) => ({
    name,
  }));

  return (
    <div>
      <DropDown
        label="Content Type"
        data={typeArray}
        filterBy="name"
        onChange={setContentType}
      />
      <>
        {contentType !== "" ? (
          <>
            <AddContentForm
              contentType={contentType}
              onChangeFunction={setContentData}
            />
            <DataPreview data={contentData} />
          </>
        ) : null}
      </>
    </div>
  );
}

export default AddContentPage;
