import React from "react";
import { BuildCharacterProvider } from "../../context/BuildCharacterContext";
import Tabbar from "../../components/Tabbar";

interface BuildCharacterPageProps {
  tabArray: any;
}
function BuildCharacterPage({ tabArray }: BuildCharacterPageProps) {
  return (
    <>
      <BuildCharacterProvider>
        <Tabbar tabs={tabArray}></Tabbar>
      </BuildCharacterProvider>
    </>
  );
}

export default BuildCharacterPage;

