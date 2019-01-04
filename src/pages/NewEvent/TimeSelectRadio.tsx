import { Radio, FormControlLabel } from "@material-ui/core";
import React from "react";
import { string } from "prop-types";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel/FormControlLabel";
import { RadioProps } from "@material-ui/core/Radio";

export type TimeSelectRadioProps = {
  value?: string;
  label: React.ReactNode;
  control?: React.ReactElement<any>;
};

export const TimeSelectRadio: React.SFC<TimeSelectRadioProps> = ({
  ...props
}) => <FormControlLabel control={props.control || <Radio />} {...props} />;

export const timeSelections = [
  { value: "15", label: "15min" },
  { value: "30", label: "30min" },
  { value: "45", label: "45min" },
  { value: "60", label: "60min" }
];
