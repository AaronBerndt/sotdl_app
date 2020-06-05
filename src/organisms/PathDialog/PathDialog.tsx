import React from "react";
import { Dialog } from "../../atoms/";
import { PathContent } from "../../molecules/";

interface PathDialogProps {
  pathInfo: any;
  isOpen: boolean;
}

function PathDialog({ pathInfo, isOpen }: PathDialogProps) {
  return (
    <Dialog
      title={`Confirm ${pathInfo.type} Path`}
      actionName="Confirm Path"
      isOpen={isOpen}
    >
      <PathContent pathInfo={pathInfo} />
    </Dialog>
  );
}

export default PathDialog;
