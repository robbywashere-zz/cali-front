import styled from "styled-components";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { PureComponent, Component } from "react";

import * as muiColors from "@material-ui/core/colors";

import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Color } from "csstype";

const mColors = Object.keys(muiColors).filter(color => color !== "common");

export type ColorSelectorProps = {
  handleChange: (event: React.ChangeEvent<{}>, value: string) => void;
  selectedValue: string;
  label?: string;
  name?: string;
  colors?: Color[];
};
export class ColorSelector extends PureComponent<ColorSelectorProps> {
  render() {
    const {
      handleChange,
      selectedValue,
      label = "Event Color",
      name = "color-picker",
      colors = mColors
    } = this.props;
    return (
      <ColorFieldset>
        <FormLabel required component="legend">
          {label}
        </FormLabel>
        <RadioGroup
          row
          name={name}
          onChange={handleChange}
          value={selectedValue}
        >
          {colors.map((color, i) => (
            <ColorRadio key={i} value={color} />
          ))}
        </RadioGroup>
      </ColorFieldset>
    );
  }
}
const ColorRadio = styled(Radio)`
  color: ${({ value }) => (muiColors as any)[value]["400"]} !important;
`;
const ColorFieldset = styled(FormControl).attrs({
  component: "fieldset",
  required: true,
  fullWidth: true,
  margin: "normal"
})`
  background: ${({ theme }: { theme: Theme }) => theme.palette.common.white};
  border: 1px solid
    ${({ theme }: { theme: Theme }) => theme.palette.text.disabled} !important;
  border-radius: 5px;
`;
