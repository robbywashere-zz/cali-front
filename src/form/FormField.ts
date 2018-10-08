import TextField from "@material-ui/core/TextField";
import { withProps, pure } from "recompose";
import React from "react";
/*
const FormField = withProps({
  component: FormikMui.TextField,
  fullWidth: true,
  variant: "outlined",
  margin: "normal",
  background: "#FFF"
})(FastField);
*/
export const FormField = pure(
  withProps({
    fullWidth: true,
    variant: "outlined",
    margin: "normal",
    background: "#FFF"
  })(TextField)
);
