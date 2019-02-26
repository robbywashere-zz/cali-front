import { Container, Row } from "../../../elements/Gridding";
import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NewEventHeader } from "./EventHeader";
import { withProps } from "recompose";
import { EventDurationsSelect } from "./EventDurationsSelect";
import { FormInfoEdit } from "../../../shared/FormInfoEdit";
import AvailabilityModal from "../Availability/AvailabilityModal";
import AvailabilityCalendar from "../Availability/AvailabilityCalendar";
import {
  changeHandler,
  ChangeResetHandlerProps
} from "../../../shared/HandleChange";
import TimeZoneModal from "./TimeZoneModal";
import { avInitialState } from "../Availability/AvailabilityModal";
import { tzInitialState } from "./TimeZoneModal";

const withDurationState = changeHandler({
  ...avInitialState,
  ...tzInitialState
});

type EventDurationStateProps = ChangeResetHandlerProps<
  typeof avInitialState & typeof tzInitialState
>;

//export class EventDurations extends React.Component<EventDurationStateProps> {
export class EventDurations extends React.Component {
  render() {
    // const { tzType, tzLocale, available, handleChange } = this.props;
    return (
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <EventTimeHeader />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Container>
            <Row>
              <EventDurationsSelect />
            </Row>
            <Row>
              <FormInfoEdit
                label="Date Range"
                info="Events can be scheduled on rolling days"
              >
                <AvailabilityModal>
                  {handleOpen => (
                    <Button
                      size="small"
                      onClick={handleOpen}
                      variant="outlined"
                      color="primary"
                    >
                      edit
                    </Button>
                  )}
                </AvailabilityModal>
              </FormInfoEdit>
            </Row>

            <Row>
              <FormInfoEdit
                label="Event Timezone"
                info="You're in Central Time - US & Canada. Your invitees will see
                your availability in their local time zone."
              >
                <TimeZoneModal>
                  {handleOpen => (
                    <Button
                      size="small"
                      onClick={handleOpen}
                      variant="outlined"
                      color="primary"
                    >
                      edit
                    </Button>
                  )}
                </TimeZoneModal>
              </FormInfoEdit>
            </Row>
            <Row>
              <AvailabilityCalendar />
            </Row>
          </Container>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
const EventTimeHeader = withProps({
  color: "darkGrey", //`${({ theme }: { theme: Theme }) => theme.palette.primary.light}`, ///???
  icon: InsertInvitationIcon,
  title: "Duration / Schedule"
})(NewEventHeader);
