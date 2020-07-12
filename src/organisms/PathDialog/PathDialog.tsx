import React from "react";
import { Dialog } from "../../atoms/";
import { PathContent } from "../../molecules/";

interface PathDialogProps {
  pathInfo: any;
  isOpen: any;
  onClickFuncion: any;
  submitOnClickFunction: any;
}

function PathDialog({
  pathInfo,
  isOpen,
  onClickFuncion,
  submitOnClickFunction,
}: PathDialogProps) {
  const pathType = pathInfo.type;

  return (
    <Dialog
      title={`Confirm ${pathType} Path`}
      actionName="Confirm Path"
      isOpen={isOpen}
      onClickFuncion={onClickFuncion}
      submitOnClickFunction={submitOnClickFunction}
    >
      <PathContent pathInfo={pathInfo} />
    </Dialog>
  );
}

export default PathDialog;
