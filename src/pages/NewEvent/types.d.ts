import React from "react";
export interface ModalProps {
  open: boolean;
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  children: (
    handleOpen: (event: React.MouseEvent<HTMLElement>) => void
  ) => void;
}
