import styled from "styled-components";
import Button from "@material-ui/core/Button";
export const SubmitButton = styled(Button).attrs({
  type: "submit",
  fullWidth: true,
  variant: "raised",
  color: "primary"
})`
  margin-top: ${({ theme }) => theme.spacing.unit * 3}px;
`;
