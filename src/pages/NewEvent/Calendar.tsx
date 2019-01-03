import { Container } from "../../elements/Gridding";
import React from "react";
import styled from "styled-components";
import { SlotList } from "./Slots";
import { Month, DayRow, DayRowLabel, Week } from "./Month";
import { DAYS } from "./AvailabilityCalendar";
import { DayWithCalendarContext } from "./Day";

export type CalendarProps = {
  onSelectDays: (e: any) => void;
};
export const Calendar: React.SFC<CalendarProps> = ({ onSelectDays }) => {
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
      {[0, 7, 14, 21].map(wi => (
        <Week key={wi}>
          {DAYS.map((d, i) => (
            <DayWithCalendarContext
              onSelectDays={onSelectDays}
              key={d + wi}
              label={d + wi}
              value={d + wi}
            >
              <SlotList />
            </DayWithCalendarContext>
          ))}
        </Week>
      ))}
    </Month>
  );
};
export const CalendarContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.unit * 3}px;
  padding-bottom: ${({ theme }) => theme.spacing.unit}px;
`;
