import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { readableColor } from "polished";
import React from "react";
import * as muiColors from "@material-ui/core/colors";
type AvatarPropType = {
  title: string;
  icon?: React.ComponentType;
  color?: string;
};

export const HeaderAvatar = styled<React.ComponentType<AvatarPropType>>(
  ({ title, icon: Icon, color, ...props }) => (
    <Avatar {...props}>
      {Icon ? (
        <Icon />
      ) : (
        title
          .trim()
          .substr(0, 3)
          .toUpperCase()
      )}
    </Avatar>
  )
)`
  margin-right: ${({ theme }) => theme.spacing.unit * 3}px;
  color: #fff;
  background-color: ${({ color }) => resolveColor(color)} !important;
`;

function resolveColor(color: string) {
  return ((muiColors as any)[color] || {})["400"] || color;
}
