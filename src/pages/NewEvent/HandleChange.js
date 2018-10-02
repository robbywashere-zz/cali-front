import { ROLLING } from "./AvailabilitySelect";
import { withStateHandlers } from "recompose";

export const changeHandler = origState =>
  withStateHandlers(origState, {
    handleChange: state => ({ target }) => ({
      ...state,
      [target.name]: target.value
    })
  });
