import styled from "../../styled-components";
import React from "react";
import { Typography } from "@material-ui/core";
import { lighten } from "polished";
import { withCalendarContext, CalendarContextType } from "./CalendarController";

export type DayLabelProps = {
  text: string;
  isToday: boolean;
  [x: string]: any;
};

export const DayLabel = styled<React.SFC<DayLabelProps>>(
  ({ text, isToday, ...props }: DayLabelProps) => (
    <Typography align="left" {...props}>
      <DayText isToday={isToday}>{text}</DayText>
    </Typography>
  )
)`
  border-radius: 50%;
  color: ${({ theme, isToday }) =>
    isToday ? theme.palette.secondary.main : "inherit"} !important;
  padding: ${({ theme }) => theme.spacing.unit}px;
`;

const DayText = styled.span`
  border-radius: 50%;
  width: ${p => p.theme.typography.fontSize * 2}px;
  height: ${p => p.theme.typography.fontSize * 2}px;
  text-align: center;
  vertical-align: middle;
  line-height: ${p => p.theme.typography.fontSize * 2}px;
`;

export type DayProps = {
  onSelectDays: (e: any) => void;
  label: string | number;
  value: number;
};
export const Day = styled<React.SFC<DayProps & CalendarContextType>>(
  ({
    selectDay,
    hoverDay,
    unselectDay,
    dayInRange,
    isSelectingDay,
    onSelectDays,
    label,
    value,
    dayStart,
    dayEnd,
    today,
    ...props
  }) => (
    <div
      onMouseEnter={() => (isSelectingDay ? hoverDay(value) : null)}
      onMouseDown={() => selectDay(value)}
      onMouseUp={() => unselectDay(() => {})}
      {...props}
    >
      <DayLabel isToday={value === today} text={label} />
      {props.children}
    </div>
  )
).attrs({
  style: ({ dayInRange, theme, value }: any) => ({
    background: dayInRange(value)
      ? lighten(0.5, theme.palette.primary.main)
      : "inherit"
  })
})`
  border: 1px solid ${p => p.theme.palette.divider};
  height: ${p => p.theme.spacing.unit * 18}px;
  user-select: none;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: ${p => p.theme.shadows[6]};

    &::after {
      display: ${p =>
        p.isSelectingDay && p.dayStart === p.value ? "inherit" : "none"};

      ${p =>
        arrow({
          color: lighten(0.3, p.theme.palette.primary.main),
          direction: "right"
        })}
    }

    &::before {
      display: ${p =>
        p.isSelectingDay && p.dayEnd === p.value ? "inherit" : "none"};

      ${p =>
        arrow({
          color: lighten(0.3, p.theme.palette.primary.main),
          direction: "left"
        })}
    }

    //border: 3px solid ${p => p.theme.palette.primary.main} !important;
  }
`;

function arrow({ direction = "left", size = "12px", color }: any) {
  const dir = direction === "left" ? "right" : "left";
  const otherDir = direction === "left" ? "left" : "right";
  return `${otherDir}: 105%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 25px;
      padding-${dir}: ${size};
      position: absolute;
      pointer-events: none;
      z-index: 1;
      border-width: ${size};
      margin-top: -${size};
      border-${otherDir}-color: ${color}`;
}
export const DayWithCalendarContext = withCalendarContext<DayProps>()(Day);
