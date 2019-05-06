import React from "react";
import { ColorSelector } from "../../../form/ColorSelector";
import { AdornText } from "../../../shared/AdornText";
import { FormField } from "../../../form/FormField";
import { adorn } from "../../../shared/AdornText";
import { FormActions } from "../../../shared/FormActions";
import { connect } from "react-redux";
import { EventState } from "../../../redux/Events";
import { InjectedFormikProps, withFormik } from "formik";
import { slugify } from "../../../shared/util";

export const EventLinkField = adorn("link")(FormField);

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
  NewEventFormProps & EventState,
  NewEventFormValues
>;

export const NewEventForm: React.SFC<NewEventFormikProps> = ({
  linkBase = "cali.com/username/",
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
          ? setFieldValue("link", slugify(values.name))
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
    <FormActions dividerTop handleNext={() => {}} handleCancel={() => {}} />
  </form>
);

const initialValues = {
  name: "my event",
  linkBase: "cali.com/robby/",
  link: "my-event",
  eventColor: "blue"
};

function mapStateToProps({ events }: { events: EventState }) {
  return events;
}

export const withEventFormik = withFormik<
  NewEventFormProps & EventState,
  NewEventFormValues
>({
  validateOnChange: true,
  handleSubmit: () => {},
  mapPropsToValues: () => ({ ...initialValues })
});

export const EventForm = connect(mapStateToProps)(
  withEventFormik(NewEventForm)
);
