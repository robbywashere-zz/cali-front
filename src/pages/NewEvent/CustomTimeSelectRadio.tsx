import React from "react";
import { Radio, FormControlLabel } from "@material-ui/core";
import { AdornField } from "../AdornText";
export class CustomTimeSelectRadio extends React.Component<any> {
  state = { value: "85" };
  dispatchChange = () => {
    this.props.onChange(
      { target: { value: this.state.value || null } },
      this.state.value
    );
  };

  update = (cb: () => void) => (value: string) => this.setState({ value }, cb);

  render() {
    const { value } = this.props;
    return (
      <FormControlLabel
        value={value}
        control={<Radio checked={this.state.value === value} />}
        label={
          <AdornField
            defaultValue={this.state.value}
            children={"Custom min"}
            onChange={this.update(this.dispatchChange)}
          />
        }
        onChange={this.dispatchChange}
      />
    );
  }
}
