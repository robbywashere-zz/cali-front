import React from "react";
import { Container, Row } from "elements/Gridding";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, Typography } from "@material-ui/core";
import { AdornField } from "../AdornText";
import { FormActions } from "./FormActions";
import {
  ROLLING,
  AvailabilitySelect,
  RANGE,
  INDEF
} from "./AvailabilitySelect";
import StartEndDatePicker from "./StartEndDatePicker";
import { toRenderProps, fromRenderProps, compose } from "recompose";
import { RenderWhen } from "./RenderWhen";
import { ModalState } from "./ModalState";
import { changeHandler } from "./HandleChange";

const unitedStates = compose(
  ModalState,
  changeHandler({ available: ROLLING })
);

export function AvailabilityModal({
  open,
  handleOpen,
  handleClose,
  handleChange,
  available,
  children
}) {
  return (
    <React.Fragment>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <div>
          <DialogTitle>Availability</DialogTitle>
          <DialogContent>
            <Container>
              <Row>
                <form>
                  <AvailabilitySelect
                    value={available}
                    handleChange={handleChange}
                  />
                  <RenderWhen when={available === ROLLING}>
                    <FormControl fullWidth margin="normal">
                      <AdornField
                        fullWidth
                        onChange={handleChange}
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
                  <RenderWhen when={available === RANGE}>
                    <StartEndDatePicker />
                  </RenderWhen>
                  <RenderWhen when={available === INDEF}>
                    <Typography variant="body2" color="primary">
                      Your invitees will be offered availability indefinitely
                      into the future.
                    </Typography>
                  </RenderWhen>
                  <FormActions>
                    <Button>Cancel</Button>
                    <Button color="primary">Apply</Button>
                  </FormActions>
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
