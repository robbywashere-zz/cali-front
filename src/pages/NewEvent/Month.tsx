import { Typography } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
export const Month = styled.div`
  border: 1px solid ${p => p.theme.palette.divider};
  display: block;
  width: 100%;
`;
export const DayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: dense;
`;

export const DayRowLabel: React.SFC<{ text: string }> = ({ text }) => (
  <Typography align="center">{text}</Typography>
);
export const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: dense;
`;
