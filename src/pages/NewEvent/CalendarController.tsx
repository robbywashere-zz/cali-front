import React from "react";
import { fromRenderProps } from "recompose";

export const CalendarContext = React.createContext({});

/*

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withAppContext<
  P extends { appContext?: AppContextInterface },
  R = Omit<P, 'appContext'>
  >(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
  ): React.SFC<R> {
  return function BoundComponent(props: R) {
    return (
      <AppContextConsumer>
        {value => <Component {...props} appContext={value} />}
      </AppContextConsumer>
    );
  };
}
*/
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const withCalendarContext = fromRenderProps(
  CalendarContext.Consumer,
  p => p
);

export class CalendarControl extends React.Component {
  state = {
    isSelectingDay: false,
    dayStart: 1,
    today: 5,
    dayEnd: 1
  };

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
