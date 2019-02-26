import React from "react";
import { Container, Row } from "../../../elements/Gridding";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, Typography } from "@material-ui/core";
import { typedAdornField } from "../../../shared/AdornText";
import { FormActions } from "../../../shared/FormActions";
import { AvailabilitySelect, availabilityTypes } from "./AvailabilitySelect";
import StartEndDatePicker from "./StartEndDatePicker";
import { compose } from "recompose";
import { RenderWhen } from "../../../shared/RenderWhen";
import { ModalState, ModalProps } from "../../../shared/ModalState";
import {
  changeHandler,
  HandleChangeType,
  ResetChangeType,
  ChangeResetHandlerProps
} from "../../../shared/HandleChange";
import { ModalForm } from "../../../shared/ModalForm";
import { combine, edgeDelay } from "../../../shared/util";

export const avInitialState = { available: availabilityTypes.ROLLING };
//export const availabilityChangeHandler = changeHandler(avInitialState);

export const availabilityStates = compose<
  AvailabilityModalProps,
  {
    children: ModalProps["handleOpen"];
  }
>(
  ModalState
  // availabilityChangeHandler
);

export type AvailabilityModalProps = ModalProps &
  ChangeResetHandlerProps<typeof avInitialState>;

const AvailableAdornField = typedAdornField("available");

export const AvailabilityModal: React.SFC<AvailabilityModalProps> = ({
  open,
  available,
  handleChange,
  resetChange,
  children,
  handleOpen,
  handleClose
}) => {
  return (
    <React.Fragment>
      <Dialog fullWidth open={open} scroll="body" onClose={handleClose}>
        <div>
          <DialogTitle>Availability</DialogTitle>
          <DialogContent>
            <Container>
              <Row>
                <ModalForm>
                  <AvailabilitySelect
                    value={available}
                    handleChange={handleChange as any}
                  />
                  <RenderWhen when={available === availabilityTypes.ROLLING}>
                    <FormControl fullWidth margin="normal">
                      <AvailableAdornField
                        onChange={handleChange as any}
                        InputLabelProps={{ shrink: true }}
                        defaultValue={60}
                        margin="normal"
                        position="end"
                        label="Number of days into the future."
                      >
                        <Typography variant="body2" style={{ width: "5rem" }}>
                          rolling days
                        </Typography>
                      </AvailableAdornField>
                    </FormControl>
                  </RenderWhen>
                  <RenderWhen when={available === availabilityTypes.RANGE}>
                    <StartEndDatePicker />
                  </RenderWhen>
                  <RenderWhen when={available === availabilityTypes.INDEF}>
                    <Typography variant="body2" color="primary">
                      Your invitees will be offered availability indefinitely
                      into the future.
                    </Typography>
                  </RenderWhen>
                  <FormActions
                    handleNext={() => {}}
                    handleCancel={combine(handleClose, edgeDelay(resetChange))}
                  />
                </ModalForm>
              </Row>
            </Container>
          </DialogContent>
        </div>
      </Dialog>
      {children(handleOpen)}
    </React.Fragment>
  );
};

export default availabilityStates(AvailabilityModal);
