import React from "react";
import { Container, Row } from "elements/Gridding";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, Typography } from "@material-ui/core";
import { AdornField } from "../AdornText";
import { FormActions } from "./FormActions";
import { AvailabilitySelect, availabilityTypes } from "./AvailabilitySelect";
import StartEndDatePicker from "./StartEndDatePicker";
import { compose } from "recompose";
import { RenderWhen } from "./RenderWhen";
import { ModalState } from "./ModalState";
import { changeHandler } from "./HandleChange";
import { ModalProps } from "./types";

const unitedStates = compose(
  ModalState,
  changeHandler({ available: availabilityTypes.ROLLING })
);

export function AvailabilityModal(
  props: ModalProps & {
    available: availabilityTypes;
    handleChange: (at: availabilityTypes) => void;
  }
) {
  return (
    <React.Fragment>
      <Dialog fullWidth open={props.open} onClose={props.handleClose}>
        <div>
          <DialogTitle>Availability</DialogTitle>
          <DialogContent>
            <Container>
              <Row>
                <form>
                  <AvailabilitySelect
                    value={props.available}
                    handleChange={props.handleChange}
                  />
                  <RenderWhen
                    when={props.available === availabilityTypes.ROLLING}
                  >
                    <FormControl fullWidth margin="normal">
                      <AdornField
                        fullWidth
                        onChange={props.handleChange}
                        InputLabelProps={{ shrink: true }}
                        defaultValue={60}
                        margin="normal"
                        position="end"
                        label="Number of days into the future."
                      >
                        rolling days
                      </AdornField>
                    </FormControl>
                  </RenderWhen>
                  <RenderWhen
                    when={props.available === availabilityTypes.RANGE}
                  >
                    <StartEndDatePicker />
                  </RenderWhen>
                  <RenderWhen
                    when={props.available === availabilityTypes.INDEF}
                  >
                    <Typography variant="body2" color="primary">
                      Your invitees will be offered availability indefinitely
                      into the future.
                    </Typography>
                  </RenderWhen>
                  <FormActions />
                </form>
              </Row>
            </Container>
          </DialogContent>
        </div>
      </Dialog>
      {children({ handleOpen })}
    </React.Fragment>
  );
}

export default unitedStates(AvailabilityModal);
