import React from "react";
import { Container, Row } from "../../elements/Gridding";
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
import { ModalState, ModalProps } from "./ModalState";
import { changeHandler } from "./HandleChange";

export const availabilityStates = compose<
  AvailabilityModalProps,
  {
    children: ModalProps["handleOpen"];
  }
>(
  changeHandler({ available: availabilityTypes.ROLLING }),
  ModalState
);

type AvailabilityModalProps = {
  available: availabilityTypes;
  handleChange: (at: availabilityTypes) => void;
} & ModalProps;

export const AvailabilityModal: React.SFC<AvailabilityModalProps> = ({
  open,
  available,
  handleChange,
  children,
  handleOpen,
  handleClose
}) => {
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
                    handleChange={({ target: { value } }) =>
                      handleChange(parseInt(value))
                    }
                  />
                  <RenderWhen when={available === availabilityTypes.ROLLING}>
                    <FormControl fullWidth margin="normal">
                      <AdornField
                        fullWidth
                        onChange={({ target: { value } }) =>
                          handleChange(parseInt(value))
                        }
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
                  <RenderWhen when={available === availabilityTypes.RANGE}>
                    <StartEndDatePicker />
                  </RenderWhen>
                  <RenderWhen when={available === availabilityTypes.INDEF}>
                    <Typography variant="body2" color="primary">
                      Your invitees will be offered availability indefinitely
                      into the future.
                    </Typography>
                  </RenderWhen>
                  <FormActions handleNext={() => {}} handleCancel={() => {}} />
                </form>
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
