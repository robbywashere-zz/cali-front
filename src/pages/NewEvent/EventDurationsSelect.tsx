import { RadioGroupSelector } from "./RadioGroup";
import React from "react";
import { RadioGroupState } from "../../form/RadioGroupState";
import { timeSelections, TimeSelectRadio } from "./TimeSelectRadio";
import { CustomTimeSelectRadio } from "./CustomTimeSelectRadio";
export function EventDurationsSelect() {
  return (
    <RadioGroupState>
      {({ handleChange, selectedValue }) => (
        <RadioGroupSelector
          label="Duration"
          handleChange={handleChange}
          selectedValue={selectedValue}
          selections={timeSelections}
          radioComponent={TimeSelectRadio}
        >
          <CustomTimeSelectRadio onChange={() => {}} value={selectedValue} />
        </RadioGroupSelector>
      )}
    </RadioGroupState>
  );
}
