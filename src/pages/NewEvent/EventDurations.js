import { Container, Item, Row } from "elements/Gridding";
import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NewEventHeader } from "./EventHeader";
import { Typography, FormHelperText } from "@material-ui/core";
import { withProps, withState, toRenderProps } from "recompose";
import { EventDurationsSelect } from "./EventDurationsSelect";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { FormInfoEdit } from "./FormInfoEdit";
import AvailabilityModal from "./AvailabilityModal";
import AvailabilityCalendar from "./AvailabilityCalendar";

function AvailabilityEditModal() {
  return (
    <AvailabilityModal>
      {({ handleOpen }) => (
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
}

function TimezoneEditModal() {
  return (
    <AvailabilityModal>
      {({ handleOpen }) => (
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
  color: ({ theme: t }) => t.palette.primary.light,
  icon: CalendarIcon
})(NewEventHeader);
