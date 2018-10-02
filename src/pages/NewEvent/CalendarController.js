import React from "react";
import { fromRenderProps } from "recompose";

/*const withContext = Context => Component => props => (
  <Context.Consumer>
    {context => <Component {...context} {...props} />}
  </Context.Consumer>
);
*/

export const CalendarContext = React.createContext();

export const withCalendarContext = fromRenderProps(
  CalendarContext.Consumer,
  p => p
);

export class CalendarControl extends React.Component {
  state = {
    isSelectingDay: false,
    dayStart: 1,
    dayEnd: 1
  };
  selectDay = dayStart => {
    this.setState({ dayStart, dayEnd: dayStart, isSelectingDay: true });
  };
  unselectDay = cb => {
    const { dayEnd, dayStart } = this.state;
    this.setState(
      {
        dayStart: dayStart > dayEnd ? dayEnd : dayStart,
        dayEnd: dayStart < dayEnd ? dayEnd : dayStart,
        isSelectingDay: false
      },
      cb
    );
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
    const { isSelectingDay, dayStart, dayEnd } = this.state;
    return (
      <CalendarContext.Provider
        value={{
          selectDay,
          dayStart,
          dayEnd,
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
