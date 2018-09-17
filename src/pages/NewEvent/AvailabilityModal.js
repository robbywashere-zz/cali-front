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
import { renderComponent, branch } from "recompose";
import { RenderWhen } from "./RenderWhen";

export class AvailabilityModal extends React.Component {
  state = {
    open: false,
    available: ROLLING
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <Dialog fullWidth open={this.state.open} onClose={this.handleClose}>
          <div>
            <DialogTitle>Availability</DialogTitle>
            <DialogContent>
              <Container>
                <Row>
                  <form>
                    <AvailabilitySelect
                      value={this.state.available}
                      handleChange={this.handleChange}
                    />
                    <RenderWhen when={this.state.available === ROLLING}>
                      <FormControl fullWidth margin="normal">
                        <AdornField
                          fullWidth
                          onChange={this.handleChange}
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
                    <RenderWhen when={this.state.available === RANGE}>
                      <StartEndDatePicker />
                    </RenderWhen>
                    <RenderWhen when={this.state.available === INDEF}>
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
        {this.props.children({ handleOpen: this.handleOpen })}
      </React.Fragment>
    );
  }
}
