import Typography from "@material-ui/core/Typography";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import InputAdornment, {
  InputAdornmentProps
} from "@material-ui/core/InputAdornment";
import { mapProps } from "recompose";
import React from "react";
import { InputProps } from "@material-ui/core/Input";

export const AdornText: React.SFC<{}> = ({ children }) => (
  <Typography color="primary" variant="body1">
    {children}
  </Typography>
);

export const adorn = mapProps<
  TextFieldProps,
  {
    position?: InputAdornmentProps["position"];
    children?: React.ReactNode;
    inputProps?: InputProps;
  } & TextFieldProps
>(({ children, position = "start" as "start" | "end", ...rest }) => ({
  ...rest,
  InputProps: {
    [`${position}Adornment`]: (
      <InputAdornment position={position}>{children}</InputAdornment>
    ),
    ...rest.inputProps
  }
}));

export const AdornField = adorn(TextField);
