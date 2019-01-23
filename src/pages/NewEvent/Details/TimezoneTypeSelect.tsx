import React from "react";
import { RadioGroupSelector } from "../../../shared/RadioGroup";
import { ChangeHandlerProps } from "../../../shared/HandleChange";
export type timezoneType = "locked" | "local";
export const tzSelections: Array<{
  value: timezoneType;
  label: string;
}> = [{ value: "local", label: "Local" }, { value: "locked", label: "Locked" }];

type TZTypeSelectProps = ChangeHandlerProps<{ tzType: timezoneType }>;

export const TimeZoneTypeSelector: React.SFC<TZTypeSelectProps> = ({
  handleChange,
  tzType
}) => (
  <RadioGroupSelector
    name="tzType"
    label="Type"
    handleChange={handleChange as any}
    selectedValue={tzType}
    selections={tzSelections}
  />
);
