import React from "react";
import { ColorSelector } from "../../../form/ColorSelector";
import { AdornText, typedAdornField } from "../../../shared/AdornText";
import { FormField } from "../../../form/FormField";
import { adorn } from "../../../shared/AdornText";
import { FormActions } from "../../../shared/FormActions";
import {
  InjectedFormikProps,
  withFormik,
  FormikHandlers,
  FormikActions,
  FormikBag
} from "formik";
import { slugify, combine } from "../../../shared/util";
import { anyEvent } from "../../../shared/HandleChange";

export const EventLinkField = adorn("link")(FormField); //typedAdornField("event");

export type NewEventFormValues = {
  name: string;
  link: string;
  eventColor: string;
};
export type NewEventFormProps = {
  //name: string;
  linkBase?: string;
};
export type NewEventFormikProps = InjectedFormikProps<
  NewEventFormProps,
  NewEventFormValues
>;

export const NewEventForm: React.SFC<NewEventFormikProps> = ({
  linkBase = "cali.com/robby/",
  values,
  errors,
  handleSubmit,
  handleChange,
  setFieldValue
}) => (
  <form noValidate onSubmit={handleSubmit} autoComplete="off">
    <FormField
      error={!!errors.name}
      required
      label="Event Name"
      name="name"
      defaultValue={values.name}
      onBlur={e =>
        !values.link ? setFieldValue("link", slugify(values.name)) : null
      }
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
    <EventLinkField
      required
      error={!!errors.link}
      onChange={handleChange}
      value={values.link}
      onBlur={event =>
        !event.target.value
          ? setFieldValue("link", slugify(values.name)) //handleChange(anyEvent("event", slugify(values.name), event))
          : handleChange(event)
      }
      defaultValue={values.link || slugify(values.name)}
      label="Event Link"
    >
      <AdornText>{linkBase}</AdornText>
    </EventLinkField>
    <ColorSelector
      name="eventColor"
      handleChange={handleChange}
      selectedValue={values.eventColor}
    />
    <pre>{JSON.stringify(values, null, 4)}</pre>
    <FormActions dividerTop handleNext={() => {}} handleCancel={() => {}} />
  </form>
);
/*NewEventFormProps & {
    handleChange?: (values: NewEventFormValues) => void;
    validate?: (values: NewEventFormValues, props: NewEventFormProps) => void;
  },*/
const initialValues = {
  name: "my event",
  linkBase: "cali.com/robby/",
  link: "",
  eventColor: "blue"
};
export const withEventFormik = withFormik<
  NewEventFormProps,
  NewEventFormValues
>({
  validateOnChange: true,
  mapPropsToValues: ({}) => initialValues,
  /*mapPropsToValues: ({
    linkBase = "",
    values
  }) => ({ link, linkBase, eventColor, name }),*/
  /*validate: (values, props) => {
    if (typeof props.handleChange === "function") props.handleChange(values);
    if (typeof props.validate === "function")
      return props.validate(values, props);
  },*/
  handleSubmit: () => {}
});
