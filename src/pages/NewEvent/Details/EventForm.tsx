import React from "react";
import { ColorSelector } from "../../../form/ColorSelector";
import { AdornText, typedAdornField } from "../../../shared/AdornText";
import { FormField } from "../../../form/FormField";
import { adorn } from "../../../shared/AdornText";
import { FormActions } from "../../../shared/FormActions";
import { InjectedFormikProps, withFormik } from "formik";
import { slugify, combine } from "../../../shared/util";
import { anyEvent } from "../../../shared/HandleChange";

//export const AdornFormField = adorn(FormField);

export const EventLinkField = adorn("link")(FormField); //typedAdornField("event");

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
  setFieldValue,
  handleChange
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
export const withEventFormik = withFormik<
  NewEventFormProps & {
    handleChange?: (values: NewEventFormValues) => void;
    validate?: (values: NewEventFormValues, props: NewEventFormProps) => void;
  },
  NewEventFormValues
>({
  mapPropsToValues: ({
    link = "",
    linkBase = "",
    eventColor = "",
    name = ""
  }) => ({ link, linkBase, eventColor, name }),
  validateOnChange: true,
  validate: (values, props) => {
    if (typeof props.handleChange === "function") props.handleChange(values);
    if (typeof props.validate === "function")
      return props.validate(values, props);
  },
  handleSubmit: () => {}
});
