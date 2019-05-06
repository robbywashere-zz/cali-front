import { Container, Item } from "../../../elements/Gridding";
import { EventTitle } from "./EventTitle";
import { HeaderAvatar } from "./HeaderAvatar";
import React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
export type NewEventHeaderProps = {
  title?: string;
  color: string;
  icon?: React.ComponentType<SvgIconProps>;
};

export const NewEventHeader = ({
  title = "???",
  color,
  icon
}: NewEventHeaderProps) => (
  <Container alignItems="center">
    <Item>
      <HeaderAvatar color={color} title={title} icon={icon} />
    </Item>
    <Item>
      <EventTitle>{title}</EventTitle>
    </Item>
  </Container>
);
