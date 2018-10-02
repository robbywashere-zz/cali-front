import styled from "styled-components";

import React from "react";
import { DayLabel } from "./Month";
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
    ...props
  }) => (
    <div
      onMouseEnter={() => (isSelectingDay ? hoverDay(value) : null)}
      onMouseDown={() => selectDay(value)}
      onMouseUp={() => unselectDay(onSelectDays)}
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
`;
