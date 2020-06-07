import React from "react";
import { Dialog } from "../../atoms/";
import { PathContent } from "../../molecules/";

interface PathDialogProps {
  pathInfo: any;
  isOpen: any;
  onClickFuncion: any;
}

function PathDialog({ pathInfo, isOpen, onClickFuncion }: PathDialogProps) {
  return (
    <Dialog
      title={`Confirm ${pathInfo.type} Path`}
      actionName="Confirm Path"
      isOpen={isOpen}
      onClickFuncion={onClickFuncion}
    >
      <PathContent pathInfo={pathInfo} />
    </Dialog>
  );
}

export default PathDialog;
