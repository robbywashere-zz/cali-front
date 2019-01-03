import { withStateHandlers } from "recompose";

export const changeHandler = (origState: object) =>
  withStateHandlers(origState, {
    handleChange: state => ({ target }) => ({
      ...state,
      [target.name]: target.value
    })
  });
