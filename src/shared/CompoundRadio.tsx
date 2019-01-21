import Radio, { RadioProps } from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";

export type CompoundRadioProps = {
  value?: string;
  label: React.ReactNode;
  control?: React.ReactElement<RadioProps>;
};

export const CompoundRadio: React.SFC<CompoundRadioProps> = ({ ...props }) => (
  <FormControlLabel control={props.control || <Radio />} {...props} />
);
