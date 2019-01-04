import { toRenderProps, withStateHandlers } from "recompose";
export const FormState = toRenderProps(
  withStateHandlers(
    ({ initialState = { formValues: {} } }) => ({
      formValues: initialState,
      errors: {}
    }),
    {
      updateFormValue: state => ({ target: { value, name } }) => ({
        formValues: { ...(state as any).formValues, [name]: value }
      })
    }
  )
);
