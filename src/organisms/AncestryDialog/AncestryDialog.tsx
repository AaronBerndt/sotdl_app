import React from "react";
import { Dialog } from "../../atoms/";
import { AncestryContent } from "../../molecules/";

interface AncestryDialogProps {
  ancestryInfo: any;
  isOpen: boolean;
}

function AncestryDialog({ ancestryInfo, isOpen }: AncestryDialogProps) {
  return (
    <Dialog
      title="Confirm Ancestry"
      actionName="Confirm Ancestry"
      isOpen={isOpen}
    >
      <AncestryContent ancestryInfo={ancestryInfo} />
    </Dialog>
  );
}

export default AncestryDialog;
