import { Container } from "elements/Gridding";
import React from "react";
import {
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import { toRenderProps, withState } from "recompose";

const TabState = toRenderProps(withState("tabState", "changeTab", 1));
const withContext = Context => Component => props => (
  <Context.Consumer>
    {context => <Component {...context} {...props} />}
  </Context.Consumer>
);

const Slots = styled(List)`
  left: 0;
  right: 0;
  position: absolute !important;
  top: ${p => p.theme.spacing.unit * 2}px !important;
`;

const SlotItem = styled(ListItem).attrs({})`
  padding-top: 2px !important;
  padding-bottom: 2px !important;
`;

const SlotItemText = styled(ListItemText).attrs({})`
  text-align: center;
`;

const SlotList = () => (
  <Slots dense>
    <SlotItem>
      <SlotItemText primary="Slot 1" />
    </SlotItem>
    <SlotItem>
      <SlotItemText primary="Slot 2" />
    </SlotItem>
    <SlotItem>
      <SlotItemText primary="Slot 3" />
    </SlotItem>
    <SlotItem>
      <SlotItemText primary="Slot 4" />
    </SlotItem>
    <SlotItem>
      <SlotItemText primary="... More ..." />
    </SlotItem>
  </Slots>
);

const CalendarContext = React.createContext();

const withCalendarContext = withContext(CalendarContext.Consumer);

const Day = withCalendarContext(
  styled(
    ({
      selectDay,
      hoverDay,
      unselectDay,
      dayInRange,
      isSelectingDay,
      label,
      value,
      ...props
    }) => (
      <div
        onMouseEnter={() => (isSelectingDay ? hoverDay(value) : null)}
        onMouseDown={() => selectDay(value)}
        onMouseUp={() => unselectDay(value)}
        {...props}
      >
        <DayLabel text={label} />
        {props.children}
      </div>
    )
  ).attrs({
    style: p =>
      p.dayInRange(p.value) ? { background: p.theme.palette.action.hover } : {}
  })`
  border: 1px solid ${p => p.theme.palette.divider};
  height: ${({ theme }) => theme.spacing.unit * 18}px;
  user-select: none;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: ${p => p.theme.shadows[6]};
    //border: 3px solid ${p => p.theme.palette.primary.main} !important;
  }
`
);

class CalendarControl extends React.Component {
  state = {
    isSelectingDay: false,
    dayStart: 1,
    dayEnd: 1
  };

  selectDay = dayStart => {
    this.setState({ dayStart, dayEnd: dayStart, isSelectingDay: true });
  };

  unselectDay = () => {
    const { dayEnd, dayStart } = this.state;

    this.setState({
      dayStart: dayStart > dayEnd ? dayEnd : dayStart,
      dayEnd: dayStart < dayEnd ? dayEnd : dayStart,
      isSelectingDay: false
    });
  };

  hoverDay = dayEnd => this.setState({ dayEnd });

  dayInRange = day => {
    return (
      (this.state.dayStart <= parseInt(day) &&
        parseInt(day) <= this.state.dayEnd) ||
      (this.state.dayEnd <= parseInt(day) &&
        parseInt(day) <= this.state.dayStart)
    );
  };

  render() {
    const { selectDay, dayInRange, hoverDay, unselectDay } = this;
    const { isSelectingDay } = this.state;
    return (
      <CalendarContext.Provider
        value={{
          selectDay,
          dayInRange,
          unselectDay,
          hoverDay,
          isSelectingDay
        }}
      >
        {this.props.children}
      </CalendarContext.Provider>
    );
  }
}

const Month = styled.div`
  border: 1px solid ${p => p.theme.palette.divider};
  display: block;
  width: 100%;
`;

const DayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: dense;
`;

const DayLabel = styled(props => (
  <Typography align="left" {...props}>
    {props.text}
  </Typography>
))`
  padding: ${p => p.theme.spacing.unit}px;
`;

const DayRowLabel = ({ text }) => (
  <Typography align="center">{text}</Typography>
);
const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: dense;
`;

const DAYS = "1,2,3,4,5,6,7".split(",").map(i => parseInt(i));

function Calendar() {
  return (
    <CalendarControl>
      <Month>
        <DayRow>
          <DayRowLabel text="Sun" />
          <DayRowLabel text="Mon" />
          <DayRowLabel text="Tue" />
          <DayRowLabel text="Wed" />
          <DayRowLabel text="Thu" />
          <DayRowLabel text="Fri" />
          <DayRowLabel text="Sat" />
        </DayRow>
        {[0, 7, 14, 21].map(wi => (
          <Week key={wi}>
            {DAYS.map((d, i) => (
              <Day key={d + wi} label={d + wi} value={d + wi}>
                <SlotList />
              </Day>
            ))}
          </Week>
        ))}
      </Month>
    </CalendarControl>
  );
}
const CalendarContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.unit * 3}px;
  padding-bottom: ${({ theme }) => theme.spacing.unit}px;
`;
export function AvailabilityCalendar() {
  return (
    <React.Fragment>
      <FormLabel>Availability</FormLabel>
      <CalendarContainer>
        <TabState>
          {({ tabState, changeTab }) => (
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
          )}
        </TabState>
      </CalendarContainer>
      <Container>
        <Calendar />
      </Container>
    </React.Fragment>
  );
}
