import Select from "@material-ui/core/Select";
import React from "react";
import { FormControl, MenuItem, InputLabel } from "@material-ui/core";

export enum availabilityTypes {
  ROLLING,
  RANGE,
  INDEF
}
export type AvailabilitySelectProps = {
  handleChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode
  ) => void;
  value: availabilityTypes;
};

export const AvailabilitySelect: React.SFC<AvailabilitySelectProps> = ({
  value,
  handleChange
}) => (
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
      <MenuItem value={availabilityTypes.ROLLING}>
        Over a period of rolling days
      </MenuItem>
      <MenuItem value={availabilityTypes.RANGE}>Over a date range</MenuItem>
      <MenuItem value={availabilityTypes.INDEF}>Indefinitely</MenuItem>
    </Select>
  </FormControl>
);
