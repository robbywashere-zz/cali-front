import { Container, Item } from "elements/Gridding";
import { EventTitle } from "./EventTitle";
import { HeaderAvatar } from "./HeaderAvatar";

import React from "react";
export const NewEventHeader = ({ title = "My Event", color, icon }) => (
  <Container alignItems="center">
    <Item>
      <HeaderAvatar color={color} title={title} icon={icon} />
    </Item>
    <Item>
      <EventTitle>{title}</EventTitle>
    </Item>
  </Container>
);
