import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/LockOutlined";
import styled from "styled-components";
import React from "react";
export const StyledAvatar = styled(Avatar)`
  && {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    margin: ${({ theme }) => theme.spacing.unit}px;
  }
`;

export const LockAvatar = () => (
  <StyledAvatar>
    <LockIcon />
  </StyledAvatar>
);
