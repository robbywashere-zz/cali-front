import styled, { css } from "styled-components";

import React from "react";
import { Typography } from "@material-ui/core";
import { lighten } from "polished";

const DayLabel = styled(({ text, isToday, ...props }) => (
  <Typography align="left" {...props}>
    <DayText isToday={isToday}>{text}</DayText>
  </Typography>
))`
  border-radius: 50%;
  color: ${p =>
    p.isToday ? p.theme.palette.secondary.main : "inherit"} !important;
  padding: ${p => p.theme.spacing.unit}px;
`;

//border: ${p =>
//    !p.isToday ? "none" : `1px solid ${p.theme.palette.secondary.main}`};
const DayText = styled.div`
  border-radius: 50%;
  width: ${p => p.theme.typography.fontSize * 2}px;
  height: ${p => p.theme.typography.fontSize * 2}px;
  text-align: center;
  vertical-align: middle;
  line-height: ${p => p.theme.typography.fontSize * 2}px;
`;

export const Day = styled(
  ({
    onSelectDays,
    selectDay,
    hoverDay,
    unselectDay,
    dayInRange,
    isSelectingDay,
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
      onMouseUp={() => unselectDay(onSelectDays)}
      {...props}
    >
      <DayLabel isToday={value === today} text={label} />
      {props.children}
    </div>
  )
).attrs({
  style: p => ({
    background: p.dayInRange(p.value)
      ? lighten(0.5, p.theme.palette.primary.main)
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

function arrow({ direction = "left", size = "12px", color }) {
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
