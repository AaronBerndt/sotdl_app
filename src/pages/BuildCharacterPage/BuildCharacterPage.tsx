import React from "react";
import { BuildCharacterProvider } from "../../context/BuildCharacterContext";
import LastStepsPage from "../LastStepsPage/LastStepPage";
import Tabbar from "../../components/Tabbar";
import PathsPage from "../PathsPage/";
import { AncestryPage } from "../AncestryPage/";

const createTab = (name: string, view: any) => ({ name, view });

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
