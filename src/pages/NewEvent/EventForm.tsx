import React from "react";
import { ColorSelector } from "../../form/ColorSelector";
import { AdornText } from "../AdornText";
import { FormField } from "../../form/FormField";
import { adorn } from "../AdornText";
import { FormActions } from "./FormActions";
import { InjectedFormikProps, withFormik } from "formik";

export const AdornFormField = adorn(FormField);

export type NewEventFormProps = {
  linkBase?: string;
  name?: string;
  link?: string;
  eventColor?: string;
};

export type NewEventFormValues = {
  linkBase: string;
  name: string;
  link: string;
  eventColor: string;
};

export const NewEventForm: React.SFC<
  InjectedFormikProps<NewEventFormProps, NewEventFormValues>
> = ({
  linkBase = "cali.com/robby/",
  values,
  errors,
  handleSubmit,
  handleChange
}) => (
  <form noValidate onSubmit={handleSubmit} autoComplete="off">
    <FormField
      error={!!errors.name}
      required
      label="Event Name"
      name="name"
      onChange={handleChange}
    />
    <FormField label="Location" name="location" onChange={handleChange} />
    <FormField
      onChange={handleChange}
      multiline
      rows={4}
      label="Description/Instructions"
      name="description"
    />
    <AdornFormField
      required
      error={!!errors.link}
      onChange={handleChange}
      label="Event Link"
      name="link"
    >
      <AdornText>{linkBase}</AdornText>
    </AdornFormField>
    <ColorSelector
      name="eventColor"
      handleChange={handleChange}
      selectedValue={values.eventColor}
    />
    <pre>{JSON.stringify(values, null, 4)}</pre>
    <FormActions dividerTop handleNext={() => {}} handleCancel={() => {}} />
  </form>
);
export const withEventFormik = withFormik<
  NewEventFormProps & {
    handleChange?: (values: NewEventFormValues) => void;
    validate?: (values: NewEventFormValues, props: NewEventFormProps) => void;
  },
  NewEventFormValues
>({
  validateOnChange: true,
  validate: (values, props) => {
    if (typeof props.handleChange === "function") props.handleChange(values);
    if (typeof props.validate === "function")
      return props.validate(values, props);
  },
  handleSubmit: () => {}
});
