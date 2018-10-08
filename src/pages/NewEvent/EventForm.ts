import Button from "@material-ui/core/Button";
import React from "react";
import { ColorSelector } from "../../form/ColorSelector";
import { AdornText } from "../AdornText";
import { FormField } from "../../form/FormField";
import { adorn } from "../AdornText";
import { FormActions } from "./FormActions";

export const AdornFormField = adorn(FormField);

export const NewEventForm = props => {
  const {
    linkBase = "cali.com/robby/",
    values = {},
    children,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleChange
  } = props;
  return (
    <form noValidate onSubmit={handleSubmit} autoComplete="off">
      <FormField
        error={errors.name}
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
        error={errors.link}
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
      <FormActions dividerTop />
    </form>
  );
};
