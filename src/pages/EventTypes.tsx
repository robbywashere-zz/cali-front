import Divider from "@material-ui/core/Divider";
import Title from "../elements/Title";
import styled from "styled-components";
import { EventItem } from "../components/EventCard";
import React from "react";
import { Container, Item, Page, Row } from "../elements/Gridding";
import { Link } from "react-router-dom";

import { RowFAB } from "../components/RowFAB";
import { Theme } from "@material-ui/core";

const Events = styled(Container)`
  padding: ${({ theme }) => theme.spacing.unit * 3}px;
`;

const EventList = styled(Container).attrs({
  justify: "flex-start",
  spacing: ({ theme }: { theme: Theme }) => theme.spacing.unit * 3
})``;

export default () => (
  <Page>
    <Row xs>
      <Title>Event Types</Title>
      <RowFAB right component={Link} to="/new-event" />
      <Divider />
    </Row>
    <Events>
      <EventList>
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </EventList>
    </Events>
  </Page>
);
