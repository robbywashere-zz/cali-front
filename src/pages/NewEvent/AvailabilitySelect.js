import Select from "@material-ui/core/Select";
import React from "react";
import { FormControl, MenuItem, InputLabel } from "@material-ui/core";
export function AvailabilitySelect({ value, handleChange }) {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel shrink htmlFor="available">
        When can events be scheduled?
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          name: "available",
          id: "available"
        }}
      >
        <MenuItem value={ROLLING}>Over a period of rolling days</MenuItem>
        <MenuItem value={RANGE}>Over a date range</MenuItem>
        <MenuItem value={INDEF}>Indefinitely</MenuItem>
      </Select>
    </FormControl>
  );
}
export const ROLLING = 1;
export const RANGE = 2;
export const INDEF = 3;
