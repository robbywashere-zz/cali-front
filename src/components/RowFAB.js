import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

export const RowFAB = styled(
  ({ left, right, icon: Icon = AddIcon, ...props }) => (
    <Button {...props} variant="fab" mini={true} color="secondary">
      <Icon />
    </Button>
  )
)`
  && {
    position: absolute;
    ${({ left, right }) => (!left || right ? "right" : "left")}: ${({
      theme
    }) => theme.spacing.unit * 3}px;
    bottom: ${({ theme }) => theme.spacing.unit}px;
  }
`;
