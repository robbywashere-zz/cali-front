import React from "react";
import { Container, Row } from "../../../elements/Gridding";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormActions } from "../../../shared/FormActions";
import { RenderWhen } from "../../../shared/RenderWhen";
import { ModalProps, ModalState } from "../../../shared/ModalState";
import { ModalForm } from "../../../shared/ModalForm";
import { hot } from "react-hot-loader";
import Typography from "@material-ui/core/Typography";
import { timezoneType, TimeZoneTypeSelector } from "./TimezoneTypeSelect";
import TimeZoneSearch from "./TimeZoneSearch";
import { TZFinder } from "./timezoneFinder";
import TZ from "../../../tz.json";
import { compose } from "recompose";
import { combine, edgeDelay } from "../../../shared/util";
import { ChangeResetHandlerProps } from "../../../shared/HandleChange";
import { changeHandler } from "../../../shared/HandleChange";
const tzFinder = new TZFinder(TZ);

//export const tzChangeHandler = changeHandler(tzInitialState);

export const timeZoneStates = compose<
  TimeZoneModalProps,
  {
    children: ModalProps["handleOpen"];
    tzType: timezoneType;
    tzLocale: string;
    handleChange: any;
  }
>(ModalState);

export type TimeZoneModalProps = ModalProps &
  ChangeResetHandlerProps<{ tzType: timezoneType; tzLocale: string }>;

export class TimeZoneModal extends React.Component<TimeZoneModalProps> {
  render() {
    const {
      open,
      tzType,
      tzLocale,
      handleChange,
      resetChange,
      children,
      handleOpen,
      handleClose
    } = this.props;
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
                        Invitees will see your availability in a locked time
                        zone. Recommended for in-person meetings.
                      </Typography>
                      <TimeZoneSearch
                        handleChange={handleChange}
                        tzLocale={tzLocale}
                        tzFinder={tzFinder}
                      />
                    </RenderWhen>
                    <FormActions
                      handleNext={() => {}}
                      handleCancel={combine(
                        handleClose,
                        edgeDelay(resetChange)
                      )}
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
  }
}

//export default timeZoneStates(hot(module)(TimeZoneModal));
export default timeZoneStates(TimeZoneModal);
