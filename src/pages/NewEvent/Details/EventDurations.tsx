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
import { Theme } from "@material-ui/core";
import TimeZoneModal from "./TimeZoneModal";

const AvailabilityEditModal: React.SFC<{}> = () => {
  return (
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
  );
};

function TimezoneEditModal() {
  return (
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
  );
}

export function EventDurations() {
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
              <AvailabilityEditModal />
            </FormInfoEdit>
          </Row>

          <Row>
            <FormInfoEdit
              label="Event Timezone"
              info="You're in Central Time - US & Canada. Your invitees will see
                your availability in their local time zone."
            >
              <TimezoneEditModal />
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
const EventTimeHeader = withProps({
  color: `${({ theme }: { theme: Theme }) => theme.palette.primary.light}`, ///???
  icon: InsertInvitationIcon,
  title: "Duration / Schedule"
})(NewEventHeader);
