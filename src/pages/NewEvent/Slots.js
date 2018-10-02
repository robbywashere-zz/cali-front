import { List, ListItem, ListItemText, Button } from "@material-ui/core";

import React from "react";
import styled from "styled-components";
const Slots = styled(List)`
  left: 0;
  right: 0;
  position: absolute !important;
  top: ${p => p.theme.spacing.unit * 2}px !important;
`;
const SlotItemText = styled(props => <ListItemText {...props} />)`
  text-align: center;
`;
const SlotItem = styled(({ children, ...props }) => (
  <ListItem {...props}>
    <SlotItemText primary={children} />
  </ListItem>
))`
  padding-top: 2px !important;
  padding-bottom: 2px !important;
`;
const SlotMore = styled(({ ...props }) => (
  <SlotItem {...props}>
    <Button
      color="primary"
      onMouseDown={e => e.stopPropagation()}
      //     onMouseUp={e => e.stopPropagation()}
    >
      more
    </Button>
  </SlotItem>
))`
  padding-top: 8px !important;
`;

export const SlotList = () => (
  <Slots dense>
    <SlotItem>Slot 1</SlotItem>
    <SlotItem>Slot 2</SlotItem>
    <SlotItem>Slot 3</SlotItem>
    <SlotMore />
  </Slots>
);
