import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import * as muiColors from "@material-ui/core/colors";
import React from "react";
export const HeaderAvatar = styled(({ title, icon: Icon, color, ...props }) => (
  <Avatar {...props}>
    {Icon ? (
      <Icon />
    ) : (
      title
        .trim()
        .substr(0, 1)
        .toUpperCase()
    )}
  </Avatar>
))`
  margin-right: ${({ theme }) => theme.spacing.unit * 3}px;
  background-color: ${({ color }) =>
    ((muiColors as any)[color] || {})["400"]} !important;
`;
