import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withProps } from "recompose";
import React from "react";

export const AdornText = ({ children }) => (
  <Typography color="primary" variant="body1">
    {children}
  </Typography>
);

export const adorn = withProps(
  ({ children, position = "start", InputProps }) => ({
    InputProps: {
      [`${position}Adornment`]: (
        <InputAdornment position={position}>{children}</InputAdornment>
      ),
      ...InputProps
    }
  })
);

export const AdornField = adorn(TextField);
