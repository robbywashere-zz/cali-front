import { withState, withHandlers, compose } from "recompose";

export type ModalStateProps = {
  setModal: (state: boolean) => boolean;
  open: boolean;
};

const modalToggleState = withState("open", "setModal", false);
const modalEvents = withHandlers<
  ModalStateProps,
  {
    handleOpen: () => boolean;
    handleClose: () => boolean;
  }
>({
  handleOpen: ({ setModal }) => () => setModal(true),
  handleClose: ({ setModal }) => () => setModal(false)
});

export const ModalState = compose<
  {},
  typeof modalToggleState & typeof modalEvents
>(
  modalToggleState,
  modalEvents
);
