import LuxonUtils from "@date-io/luxon";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { DatePicker } from "material-ui-pickers";
import { FormControl } from "@material-ui/core";
import React from "react";

export default function StartEndDatePicker() {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <FormControl margin="normal">
        <DatePicker
          leftArrowIcon={<ChevronLeft />}
          rightArrowIcon={<ChevronRight />}
          label="Start Date"
          name="startDate"
          animateYearScrolling
        />
      </FormControl>
      <FormControl margin="normal">
        <DatePicker
          leftArrowIcon={<ChevronLeft />}
          rightArrowIcon={<ChevronRight />}
          label="End Date"
          name="endDate"
          animateYearScrolling
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  );
}
