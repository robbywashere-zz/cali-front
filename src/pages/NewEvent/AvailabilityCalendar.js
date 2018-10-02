import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormLabel,
  Button,
  Typography
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { Item, Row } from "../../elements/Gridding";
import Tabs from "@material-ui/core/Tabs";
import { Container } from "elements/Gridding";
import React from "react";
import { compose, onlyUpdateForKeys } from "recompose";
import { Calendar, CalendarContainer } from "./Calendar";
import { CalendarControl, withCalendarContext } from "./CalendarController";
import { Day } from "./Day";
import { ModalState } from "./ModalState";
import { TabState } from "./TabState";

let ACModalController = compose(
  ModalState,
  withCalendarContext,
  onlyUpdateForKeys(["open"])
);

export const DayWithCalendarContext = withCalendarContext(Day);

export const DAYS = "1,2,3,4,5,6,7".split(",").map(i => parseInt(i));

const AvailabilityCalendarModal = ACModalController(function ACModal({
  open,
  handleOpen,
  handleClose,
  dayStart,
  dayEnd,
  children
}) {
  return (
    <React.Fragment>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <div>
          <DialogTitle>Availability Calendar</DialogTitle>
          <DialogContent>
            <Container>
              <Typography variant="subheading">{`${dayStart} - ${dayEnd}`}</Typography>
            </Container>
          </DialogContent>
        </div>
      </Dialog>
      {children({ handleOpen })}
    </React.Fragment>
  );
});

export function AvailabilityCalendar({ tabState, changeTab }) {
  return (
    <React.Fragment>
      <FormLabel>Availability</FormLabel>
      <CalendarContainer>
        <AppBar position="static" color="default">
          <Tabs
            value={tabState}
            onChange={(_, v) => changeTab(v)}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Hours" />
            <Tab label="Advanced" />
          </Tabs>
        </AppBar>
      </CalendarContainer>
      <Container>
        <Row>
          <Item>
            <Typography variant="subheading" align="center">
              Month
            </Typography>
          </Item>
          <Item>
            <Button variant="outlined">"!!!"</Button>
            <Button variant="outlined">"!!!"</Button>
          </Item>
        </Row>
        <CalendarControl>
          <AvailabilityCalendarModal>
            {({ handleOpen: onSelectDays }) => (
              <Calendar onSelectDays={onSelectDays} />
            )}
          </AvailabilityCalendarModal>
        </CalendarControl>
      </Container>
    </React.Fragment>
  );
}

export default TabState(AvailabilityCalendar);
