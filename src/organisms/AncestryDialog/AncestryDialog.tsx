import React, { useContext } from "react";
import { Dialog } from "../../atoms/";
import { AncestryContent } from "../../molecules/";
import { AncestryDialogContext } from "../../pages/AncestryPage/AncestryPage";

interface AncestryDialogProps {
  ancestryInfo: any;
  isOpen: any;
  onClickFuncion: any;
}

function AncestryDialog({
  ancestryInfo,
  isOpen,
  onClickFuncion,
}: AncestryDialogProps) {
  return (
    <Dialog
      title="Confirm Ancestry"
      actionName="Confirm Ancestry"
      isOpen={isOpen}
      onClickFuncion={onClickFuncion}
    >
      <AncestryContent ancestryInfo={ancestryInfo} />
    </Dialog>
  );
}

export default AncestryDialog;
