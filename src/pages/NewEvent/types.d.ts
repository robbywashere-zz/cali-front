import React from "react";
export type ModalProps = {
  open: boolean;
  handleOpen: (event: any) => void;
  handleClose: (event: any) => void;
  children: (handleOpen: (event: any) => void) => void;
};
