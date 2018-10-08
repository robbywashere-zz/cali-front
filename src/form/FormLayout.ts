import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin-top: ${p => p.theme.spacing.unit}px;
`;
export const MainPaper = styled(Paper)`
  margin-top: ${({ theme }) => theme.spacing.unit * 8}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.unit * 2}px
    ${({ theme }) => theme.spacing.unit * 3}px
    ${({ theme }) => theme.spacing.unit * 3}px;
`;

export const Layout = styled.main`
  width: auto;
  display: block;
  margin-left: ${({ theme }) => theme.spacing.unit * 3}px;
  margin-right: ${({ theme }) => theme.spacing.unit * 3}px;
  ${p => p.theme.breakpoints.up(400 + p.theme.spacing.unit * 3 * 2)} {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
