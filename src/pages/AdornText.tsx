import Typography from "@material-ui/core/Typography";
import TextField, { TextFieldProps, StandardTextFieldProps } from "@material-ui/core/TextField";
import InputAdornment, { InputAdornmentProps } from "@material-ui/core/InputAdornment";
import { withProps } from "recompose";
import React from "react";
import { InputProps } from "@material-ui/core/Input";

export const AdornText: React.SFC<{}> = ({ children }) => (
  <Typography color="primary" variant="body1">
    {children}
  </Typography>
);

export const adorn = withProps<
  { InputProps: InputProps },
  {
    children: JSX.Element;
    position?: InputAdornmentProps["position"],
    inputProps: InputProps;
  }
>(({ children, position = "start" as "start" | "end", inputProps }) => ({
  InputProps: {
    [`${position}Adornment`]: (
      <InputAdornment position={position}>{children}</InputAdornment>
    ),
    ...inputProps
  }
}));

export const AdornField = adorn(TextField as any);
