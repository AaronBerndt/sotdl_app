import React, { useState } from "react";
import { DropDown } from "../../atoms";
import { AddContentForm } from "../../organisms";

function AddContentPage() {
  const [message, setMessage] = useState("");
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
              onChangeFunction={setMessage}
            />
            <p hidden={message === ""}>{message}</p>
          </>
        ) : null}
      </>
    </div>
  );
}

export default AddContentPage;
