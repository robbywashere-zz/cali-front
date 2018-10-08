import { toRenderProps, withStateHandlers } from "recompose";
export const FormState = toRenderProps(
  withStateHandlers(
    ({ initialState = {} }) => ({
      formValues: initialState,
      errors: {}
    }),
    {
      updateFormValue: state => ({ target: { value, name } }) => ({
        formValues: { ...state.formValues, [name]: value }
      })
    }
  )
);
