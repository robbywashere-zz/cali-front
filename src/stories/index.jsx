import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
import { NewEventForm } from "../pages/NewEvent/Details/EventForm";
import { NewEventFormik } from "../pages/NewEvent";
import Layout from "../Layout";
import { configure, addDecorator } from "@storybook/react";
import { Container, Row } from "../elements/Gridding";
import AvailabilityCalendar, {
  AvailabilityCalendarComponent
} from "../pages/NewEvent/Availability/AvailabilityCalendar";

addDecorator(story => <Layout> {story()} </Layout>);

const NewEvent = storiesOf("New Event", module)
  .addDecorator(story => (
    <Container justify="center">
      <Row xs={10}> {story()} </Row>{" "}
    </Container>
  ))
  .add("NewEventForm", () => <NewEventFormik />)
  .add("AvailabilityCalendar", () => <AvailabilityCalendar />)
  .add("AvailabilityCalendarComponent", () => (
    <AvailabilityCalendarComponent />
  ));
