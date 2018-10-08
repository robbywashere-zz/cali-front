import { Radio, FormControlLabel } from "@material-ui/core";
import React from "react";
export function TimeSelectRadio({ value, label, ...props }) {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={label}
      {...props}
    />
  );
}
export const timeSelections = [
  { value: "15", label: "15min" },
  { value: "30", label: "30min" },
  { value: "45", label: "45min" },
  { value: "60", label: "60min" }
];
