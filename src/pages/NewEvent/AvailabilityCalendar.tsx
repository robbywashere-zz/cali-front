import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormLabel,
  Button,
  Typography
} from "@material-ui/core";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Container } from "../../elements/Gridding";
import React from "react";
import { compose, onlyUpdateForKeys } from "recompose";
import { Calendar, CalendarContainer } from "./Calendar";
import {
  CalendarControl,
  withCalendarContext,
  CalendarControlStateType
} from "./CalendarController";
import { Day } from "./Day";
import { ModalState, ModalProps } from "./ModalState";
import { TabState } from "./TabState";
import styled from "styled-components";

export const DAYS = [1, 2, 3, 4, 5, 6, 7];

const CalendarHeaderContainer = styled.div`
  width: 100%;
  height: 42px;
  position: absolute;
  line-height: 42px;
  vertical-align: middle;
  padding-top: ${p => p.theme.spacing.unit}px;
  padding-bottom: ${p => p.theme.spacing.unit}px;
`;

const CalendarMonthDirectionContainer = styled(Container).attrs({
  justify: "flex-end"
})`
  padding-top: ${p => p.theme.spacing.unit}px;
  padding-bottom: ${p => p.theme.spacing.unit}px;
`;

const CalendarHeaderText = styled(Typography).attrs({
  variant: "subheading",
  align: "center"
})`
  line-height: 42px !important;
  vertical-align: middle;
  font-size: 24px !important;
`;

type CalendarHeaderProps = { children: React.ReactNode };
const CalendarHeader: React.SFC<CalendarHeaderProps> = ({ children }) => (
  <CalendarHeaderContainer>
    <CalendarHeaderText>{children}</CalendarHeaderText>
  </CalendarHeaderContainer>
);

export type AvailabilityCalendarModalProps = ModalProps &
  CalendarControlStateType;

export const AvailabilityCalendarModal = ({
  children,
  open,
  handleOpen,
  handleClose,
  dayStart,
  dayEnd
}: AvailabilityCalendarModalProps) => (
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
    {children(handleOpen)}
  </React.Fragment>
);

export const ACModalWithController = compose<
  CalendarControlStateType & ModalProps,
  { children: ModalProps["children"] }
>(
  ModalState,
  withCalendarContext(),
  onlyUpdateForKeys(["open"])
)(AvailabilityCalendarModal);

const AvailabilityCalendarComponent: React.SFC<{}> = () => (
  <React.Fragment>
    <Container justify="flex-end">
      <CalendarHeader>September 28 - October 31, 2018</CalendarHeader>
      <CalendarMonthDirectionContainer>
        <Button color="primary" size="small">
          <ArrowLeftIcon />
        </Button>
        <Button color="primary">
          <ArrowRightIcon />
        </Button>
        <Button color="primary">
          <CalendarTodayIcon />
        </Button>
      </CalendarMonthDirectionContainer>
    </Container>
    <CalendarControl>
      <ACModalWithController>
        {handleOpen => <Calendar onSelectDays={handleOpen} />}
      </ACModalWithController>
    </CalendarControl>
  </React.Fragment>
);

export type AvailabilityCalendarProps = {
  tabState: number;
  changeTab: (n: number) => number;
};

const AvailabilityCalendar: React.SFC<AvailabilityCalendarProps> = ({
  tabState,
  changeTab
}) => (
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
      <AvailabilityCalendarComponent />
    </Container>
  </React.Fragment>
);

export default TabState(AvailabilityCalendar);
