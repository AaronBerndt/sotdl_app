import React, { useState, useEffect } from "react";
import { List } from "../molecules/";
import { AncestryDialog } from "../organisms/";
import axios from "axios";

function AncestryPage() {
  const [ancestryList, setAncestryList] = useState([]);
  const [selectedAncestryIndex, setSelectedAncestryIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    const { data } = await axios("http://localhost:3000/ancestries");
    setAncestryList(data);
  };

  useEffect(() => {
    if (ancestryList.length === 0) {
      getData();
    }
  }, [ancestryList]);

  const listItemOnClick = (index: number) => {
    setSelectedAncestryIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <List listItemArray={ancestryList} onClickFunction={listItemOnClick} />
      <AncestryDialog
        ancestryInfo={ancestryList[selectedAncestryIndex]}
        isOpen={isOpen}
      />
    </>
  );
}

export default AncestryPage;
