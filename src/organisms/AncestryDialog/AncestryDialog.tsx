import React from "react";
import { Dialog } from "../../atoms/";
import { AncestryContent } from "../../molecules/";

interface AncestryDialogProps {
  ancestryInfo: any;
  isOpen: any;
  onClickFuncion: any;
  submitOnClickFunction: any;
}

function AncestryDialog({
  ancestryInfo,
  isOpen,
  onClickFuncion,
  submitOnClickFunction,
}: AncestryDialogProps) {
  return (
    <Dialog
      title="Confirm Ancestry"
      actionName="Confirm Ancestry"
      isOpen={isOpen}
      onClickFuncion={onClickFuncion}
      submitOnClickFunction={submitOnClickFunction}
    >
      <AncestryContent ancestryInfo={ancestryInfo} />
    </Dialog>
  );
}

export default AncestryDialog;
