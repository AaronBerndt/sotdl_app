import React, { useState, useEffect, createContext } from "react";
import { List } from "../../molecules/";
import { AncestryDialog } from "../../organisms/";
import { useToggle } from "../../hooks/";
import axios from "axios";

export const AncestryPageContext = createContext({
  open: false,
});

function AncestryPage() {
  const [ancestryList, setAncestryList] = useState([]);
  const [selectedAncestryIndex, setSelectedAncestryIndex] = useState(0);
  const { open, togggleOpen } = useToggle();

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
    togggleOpen();
  };
  return (
    <>
      <List listItemArray={ancestryList} onClickFunction={listItemOnClick} />

      <AncestryPageContext.Provider value={{ open }}>
        <AncestryDialog ancestryInfo={ancestryList[selectedAncestryIndex]} />
      </AncestryPageContext.Provider>
    </>
  );
}

export default AncestryPage;
