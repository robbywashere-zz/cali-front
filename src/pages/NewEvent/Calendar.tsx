import { Container } from "../../elements/Gridding";
import React from "react";
import styled from "styled-components";
import { SlotList } from "./Slots";
import { Month, DayRow, DayRowLabel, Week } from "./Month";
import { DAYS } from "./AvailabilityCalendar";
import { DayWithCalendarContext } from "./Day";
import { RenderWhen } from "./RenderWhen";
import { withStateHandlers } from "recompose";
import { changeHandler } from "./HandleChange";
import { Button } from "@material-ui/core";

export type CalendarProps = {
  onSelectDays: (e: any) => void;
};

const initialState = { expandCalendar: false };

export class Calendar extends React.Component<
  CalendarProps,
  typeof initialState
> {
  state = initialState;

  toggleShowMore = () =>
    this.setState({ expandCalendar: !this.state.expandCalendar });

  render() {
    const { onSelectDays } = this.props;
    return (
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
        <Week>
          {Array(14)
            .fill(0)
            .map((_, i) => i + 1)
            .map(d => (
              <DayWithCalendarContext
                onSelectDays={onSelectDays}
                key={d}
                label={d}
                value={d}
              >
                <SlotList />
              </DayWithCalendarContext>
            ))}
          <RenderWhen when={this.state.expandCalendar}>
            {Array(16)
              .fill(0)
              .map((_, i, a) => i + a.length)
              .map(d => (
                <DayWithCalendarContext
                  onSelectDays={onSelectDays}
                  key={d}
                  label={d}
                  value={d}
                >
                  <SlotList />
                </DayWithCalendarContext>
              ))}
          </RenderWhen>
          <Button color="primary" onClick={this.toggleShowMore}>
            {!this.state.expandCalendar ? "Show More" : "Show Less"}
          </Button>
        </Week>
      </Month>
    );
  }
}
export const CalendarContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.unit * 3}px;
  padding-bottom: ${({ theme }) => theme.spacing.unit}px;
`;
