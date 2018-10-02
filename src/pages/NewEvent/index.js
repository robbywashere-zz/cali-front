import Divider from "@material-ui/core/Divider";
import Title from "elements/Title";
import React from "react";
import { Container, Item, Page, Row } from "../../elements/Gridding";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { hot } from "react-hot-loader";
import { withFormik } from "formik";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NewEventForm } from "./EventForm";
import { NewEventHeader } from "./EventHeader";
import debounceHandler from "@hocs/debounce-handler";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import { pure, toRenderProps, compose, withState } from "recompose";
import { EventDurations } from "./EventDurations";
import { FormActions } from "./FormActions";
import { Button } from "@material-ui/core";

const NewEventFormik = compose(
  withFormik({
    validateOnChange: true,
    validate: (values, props) => {
      if (typeof props.handleChange === "function") props.handleChange(values);
      if (typeof props.validate === "function")
        return props.validate(values, props);
    },
    handleSubmit: () => {}
  }),
  debounceHandler("handleChange", 200)
)(NewEventForm);

const withWatchColorName = compose(
  withState("eventColor", "eventColorChange", "blue"),
  withState("eventName", "eventNameChange", "My Event")
);

const InviteeQuestions = ({}) => (
  <ExpansionPanel defaultExpanded={false}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <NewEventHeader icon={QuestionAnswerIcon} title="Invitee Questions" />
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Item xs={7}>
        <FormActions dividerBottom>
          <Button size="small">Cancel</Button>
          <Button size="small" type="submit" color="primary">
            Next
          </Button>
        </FormActions>
      </Item>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const NewEventDetails = ({
  eventColor,
  eventName,
  eventColorChange,
  eventNameChange
}) => (
  <ExpansionPanel defaultExpanded={false}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <NewEventHeader color={eventColor} title={eventName} />
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Item xs={7}>
        <FormActions dividerBottom>
          <Button size="small">Cancel</Button>
          <Button size="small" type="submit" color="primary">
            Next
          </Button>
        </FormActions>
        <NewEventFormik
          handleChange={({ eventColor, name }) => {
            eventColorChange(eventColor);
            eventNameChange(name);
          }}
        />
      </Item>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const NewEventDetailsWithWatcher = withWatchColorName(NewEventDetails);

const NewEventPage = () => (
  <Page>
    <Row>
      <Title>New Event</Title>
      <Divider />
    </Row>
    <Container justify="center">
      <Row sm={10}>
        <NewEventDetailsWithWatcher />
      </Row>
    </Container>
    <Container justify="center">
      <Row xs={12} sm={10}>
        <EventDurations />
      </Row>
    </Container>
    <Container justify="center">
      <Row xs={12} sm={10}>
        <InviteeQuestions />
      </Row>
    </Container>
  </Page>
);

export default hot(module)(NewEventPage);
