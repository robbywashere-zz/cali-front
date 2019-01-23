import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React from "react";
import { ChangeResetHandlerProps } from "./HandleChange";
export const typedTextField = function<T extends string, U = string>(name: T) {
  const TypedTextField = TextField as TextFieldType<T>;
  return (
    props: TextFieldProps & ChangeResetHandlerProps<{ [key in T]?: U }>
  ) => (
    <TypedTextField {...props} handleChange={props.handleChange} name={name} />
  );
};
export type TextFieldType<T> = React.ComponentType<
  ChangeResetHandlerProps<T> | TextFieldProps
>;
