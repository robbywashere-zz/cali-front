import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React from "react";
export const FormField = ({
  fullWidth = true,
  variant = "outlined",
  margin = "normal",
  ...props
}: TextFieldProps & { variant?: "outlined" }) => (
  <TextField
    fullWidth={fullWidth}
    variant={variant}
    margin={margin}
    {...props}
  />
);
