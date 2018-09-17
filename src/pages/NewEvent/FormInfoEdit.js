import React from "react";
import { Typography, FormLabel, Grid } from "@material-ui/core";
import styled from "styled-components";
import { Container, Row, Item } from "../../elements/Gridding";

const FormInfoText = styled(Typography).attrs({
  variant: "body1",
  color: "primary"
})`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const TextBox = styled(Item).attrs({
  xs: 6
})`
  && {
    display: flex;
    flex-direction: row;
  }
`;

const FormInfoEditContainer = styled(Container).attrs({
  spacing: 16
})`
  padding-top: ${({ theme }) => theme.spacing.unit * 2}px !important;
  padding-bottom: ${({ theme }) => theme.spacing.unit * 2}px !important;
`;

export function FormInfoEdit({ label, info, children }) {
  return (
    <React.Fragment>
      <FormInfoEditContainer>
        <Row>
          <FormLabel>{label}</FormLabel>
        </Row>
        <TextBox>
          <FormInfoText>{info}</FormInfoText>
        </TextBox>
        <Item xs={6}>{children}</Item>
      </FormInfoEditContainer>
    </React.Fragment>
  );
}
