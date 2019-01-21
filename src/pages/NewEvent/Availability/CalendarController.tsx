import React from "react";
import { fromRenderProps, Omit } from "recompose";

export const CalendarContext = React.createContext<CalendarContextType>(
  {} as CalendarContextType
);

export type CalendarContextType = Pick<
  CalendarControl,
  "selectDay" | "dayInRange" | "unselectDay" | "hoverDay"
> &
  CalendarControlStateType;

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
  anchorDay: 0,
  dayEnd: 1
};

export type CalendarControlStateType = Omit<typeof initialState, "anchorDay">;
export class CalendarControl extends React.Component<{}, typeof initialState> {
  state = initialState;

  selectDay = (anchorDay: number) => {
    this.setState({
      anchorDay,
      dayStart: anchorDay,
      dayEnd: anchorDay,
      isSelectingDay: true
    });
  };

  unselectDay = (cb: () => void) => {
    this.setState(
      {
        isSelectingDay: false
      },
      cb
    );
  };
  hoverDay = (day: number) => {
    const { anchorDay } = this.state;
    this.setState({
      dayStart: Math.min(anchorDay, day),
      dayEnd: Math.max(anchorDay, day)
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
