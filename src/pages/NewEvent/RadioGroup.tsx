import styled from "styled-components";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import { PureComponent } from "react";
import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { CompoundRadio } from "./CompoundRadio";

type SelectionsType = { value?: string; label: React.ReactNode };

type RadioGroupMapProps = {
  selections: Array<SelectionsType>;
  radioComponent: React.ComponentType<SelectionsType>;
};
export const RadioGroupMap = ({
  selections,
  radioComponent: RadioComponent = CompoundRadio
}: RadioGroupMapProps) =>
  selections.map(({ value, label }, i) => (
    <RadioComponent label={label} key={i} value={value} />
  ));

type RadioGroupSelectorProps = {
  handleChange: (e: React.ChangeEvent<{}>, v: string) => void;
  selections?: Array<SelectionsType>;
  selectedValue?: string;
  label?: string;
  name?: string;
  children?: Array<JSX.Element> | JSX.Element;
  radioFieldSet?: typeof RadioFieldset2;
  radioComponent?: typeof CompoundRadio;
  required?: boolean;
  outline?: boolean;
};

export class RadioGroupSelector extends PureComponent<RadioGroupSelectorProps> {
  render() {
    const {
      handleChange,
      selections = [],
      selectedValue,
      label = "Radio Group",
      name = "radio-group",
      children = [],
      radioFieldSet: RadioFieldset = RadioFieldset2,
      radioComponent = CompoundRadio,
      required = true,
      outline = false
    } = this.props;

    return (
      <RadioFieldset outline={outline}>
        <div>{selectedValue}</div>
        <FormLabel required={required} component="legend">
          {label}
        </FormLabel>
        <RadioGroup
          row
          onChange={handleChange}
          value={selectedValue}
          name={name}
        >
          {RadioGroupMap({ selections, radioComponent }).concat(children)}
        </RadioGroup>
      </RadioFieldset>
    );
  }
}
export const RadioFieldset2 = styled(({ outline, ...props }) => (
  <FormControl {...props} />
)).attrs({
  component: "fieldset",
  required: true,
  fullWidth: true,
  margin: "normal"
})`
  background: ${({ theme }) => theme.palette.common.white};
  ${({ outline }) =>
    !outline
      ? null
      : `
  border: 1px solid ${({ theme }: { theme: Theme }) =>
    theme.palette.text.disabled} !important;
  border-radius: 5px;
  `};
`;

export const RadioFieldset1 = styled(FormControl).attrs({
  component: "fieldset",
  required: true,
  fullWidth: true,
  margin: "normal"
})`
  background: ${({ theme }) => theme.palette.common.white};
`;
