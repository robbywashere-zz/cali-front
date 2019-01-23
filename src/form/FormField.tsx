import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React from "react";

export const FormField: React.ComponentType<
  TextFieldProps & { variant?: "outlined" }
> = ({
  fullWidth = true,
  variant = "outlined" as "outlined",
  margin = "normal" as TextFieldProps["margin"],
  ...props
}) => (
  <TextField
    fullWidth={fullWidth}
    variant={variant}
    margin={margin}
    {...props}
  />
);
