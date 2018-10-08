import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

export const Password = ({ update, name = "password", children }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="password">{children}</InputLabel>
    <Input
      name={name}
      type="password"
      id={name}
      onChange={update}
      autoComplete="current-password"
    />
  </FormControl>
);

export const TextField = ({
  autoFocus = false,
  update,
  name = "text",
  children
}) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor={name}>{children}</InputLabel>
    <Input
      id={name}
      name={name}
      autoComplete={name}
      onChange={update}
      autoFocus={autoFocus}
    />
  </FormControl>
);
