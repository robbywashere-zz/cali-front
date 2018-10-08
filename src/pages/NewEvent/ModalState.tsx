import { withState, withHandlers, compose } from "recompose";
export const ModalState = compose(
  withState("open", "setModal", false),
  withHandlers({
    handleOpen: ({ setModal }) => e => setModal(true),
    handleClose: ({ setModal }) => e => setModal(false)
  })
);
