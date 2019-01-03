import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { InputProps } from "@material-ui/core/Input";

export type PasswordProps = {
  name?: string;
  update: InputProps["onChange"];
};

export const Password: React.SFC<PasswordProps> = ({
  update,
  name = "password",
  children
}) => (
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

export type TextFieldProps = {
  autoFocus?: boolean;
  name?: string;
  update: InputProps["onChange"];
};

export const TextField: React.SFC<TextFieldProps> = ({
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
