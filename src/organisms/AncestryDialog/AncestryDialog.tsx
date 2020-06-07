import React from "react";
import { Dialog } from "../../atoms/";
import { AncestryContent } from "../../molecules/";

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

export default ancestrydialog;
