import React from "react";
import { compose } from "recompose";
import { ModalState, ModalProps } from "../../../shared/ModalState";
import { changeHandler } from "../../../shared/HandleChange";
import { RadioGroupSelector } from "../../../shared/RadioGroup";
import { TimeZoneModalProps } from "./TimeZoneModal";
export type timezoneType = "locked" | "local";
export const tzSelections: Array<{
  value: timezoneType;
  label: string;
}> = [{ value: "local", label: "Local" }, { value: "locked", label: "Locked" }];
export const timeZoneStates = compose<
  TimeZoneModalProps,
  {
    children: ModalProps["handleOpen"];
  }
>(
  changeHandler({ tzType: "local" }),
  ModalState
);
export const TimeZoneTypeSelector: React.SFC<{
  handleChange: (e: React.ChangeEvent<{}>) => void;
  tzType: timezoneType;
}> = ({ handleChange, tzType }) => (
  <RadioGroupSelector
    name="tzType"
    label="Type"
    handleChange={handleChange}
    selectedValue={tzType}
    selections={tzSelections}
  />
);
