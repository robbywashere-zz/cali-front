import React from "react";
import { Radio, FormControlLabel } from "@material-ui/core";
import { AdornField } from "../AdornText";

export type CustomTimeSelectRadioProps = {
  onChange: (e: any, value: string | number | boolean) => void;
  value: string;
};
export class CustomTimeSelectRadio extends React.Component<
  CustomTimeSelectRadioProps
> {
  state = { value: "85" };

  update = (cb: CustomTimeSelectRadioProps["onChange"]) => (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) =>
    this.setState({ value: event.target.value }, () =>
      cb(null, event.target.value)
    );

  render() {
    const { value, onChange } = this.props;
    return (
      <FormControlLabel
        value={value}
        control={<Radio checked={this.state.value === value} />}
        label={
          <AdornField
            defaultValue={this.state.value}
            children={"custom"}
            onChange={this.update(onChange)}
          />
        }
        onChange={onChange}
      />
    );
  }
}
