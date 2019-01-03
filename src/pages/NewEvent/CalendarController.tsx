import React from "react";
import { fromRenderProps } from "recompose";

export const CalendarContext = React.createContext<CalendarContextType>(
  {} as CalendarContextType
);

export type CalendarContextType = {
  selectDay: CalendarControl["selectDay"];
  dayInRange: CalendarControl["dayInRange"];
  unselectDay: CalendarControl["unselectDay"];
  hoverDay: CalendarControl["hoverDay"];
} & CalendarControlStateType;

//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const withCalendarContext = function<T>() {
  return fromRenderProps<CalendarContextType, T, CalendarContextType & T>(
    CalendarContext.Consumer,
    p => p
  );
};

const initialState = {
  isSelectingDay: false,
  dayStart: 1,
  today: 5,
  dayEnd: 1
};

export type CalendarControlStateType = typeof initialState;

export class CalendarControl extends React.Component {
  state = initialState;

  selectDay = (dayStart: Number) => {
    this.setState({ dayStart, dayEnd: dayStart, isSelectingDay: true });
  };
  unselectDay = (cb: () => void) => {
    this.setState(
      {
        isSelectingDay: false
      },
      cb
    );
  };
  hoverDay = (dayEnd: Number) => {
    const { dayStart } = this.state;
    this.setState({
      dayStart: dayStart > dayEnd ? dayEnd : dayStart,
      dayEnd: dayStart < dayEnd ? dayEnd : dayStart
    });
  };
  dayInRange = (day: string) => {
    return (
      (this.state.dayStart <= parseInt(day) &&
        parseInt(day) <= this.state.dayEnd) ||
      (this.state.dayEnd <= parseInt(day) &&
        parseInt(day) <= this.state.dayStart)
    );
  };
  render() {
    const { selectDay, dayInRange, hoverDay, unselectDay } = this;
    const { isSelectingDay, dayStart, dayEnd, today } = this.state;
    return (
      <CalendarContext.Provider
        value={{
          selectDay,
          dayStart,
          dayEnd,
          today,
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
