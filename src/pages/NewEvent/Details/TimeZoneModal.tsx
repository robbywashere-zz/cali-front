import React from "react";
import { Container, Row } from "../../../elements/Gridding";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormActions } from "../../../shared/FormActions";
import { RenderWhen } from "../../../shared/RenderWhen";
import { ModalProps } from "../../../shared/ModalState";
import { ModalForm } from "../../../shared/ModalForm";
import { hot } from "react-hot-loader";
import Typography from "@material-ui/core/Typography";
import {
  timezoneType,
  TimeZoneTypeSelector,
  timeZoneStates
} from "./TimezoneTypeSelect";
import TimeZoneLocationSelector from "./TimeZoneLocationSelector";

export type TimeZoneModalProps = {
  tzType: timezoneType;
  handleChange: (event: React.ChangeEvent<{}>) => void;
} & ModalProps;

export const TimeZoneModal: React.SFC<TimeZoneModalProps> = ({
  open,
  tzType,
  handleChange,
  children,
  handleOpen,
  handleClose
}) => {
  return (
    <React.Fragment>
      <Dialog fullWidth open={open} scroll="body" onClose={handleClose}>
        <div>
          <DialogTitle>Time Zone Style</DialogTitle>
          <DialogContent>
            <Container>
              <Row>
                <ModalForm>
                  <TimeZoneTypeSelector
                    handleChange={handleChange}
                    tzType={tzType}
                  />
                  <RenderWhen when={tzType === "local"}>
                    <Typography variant="body2">
                      Invitees will see your availability in their time zone.
                      Recommended for virtual meetings.
                    </Typography>
                  </RenderWhen>
                  <RenderWhen when={tzType === "locked"}>
                    <Typography variant="body2">
                      Invitees will see your availability in a locked time zone.
                      Recommended for in-person meetings.
                    </Typography>
                    <TimeZoneLocationSelector />
                  </RenderWhen>
                  <FormActions handleNext={() => {}} handleCancel={() => {}} />
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

export default timeZoneStates(hot(module)(TimeZoneModal));
