import { withStateHandlers } from "recompose";

export const changeHandler = (origState: object) =>
  withStateHandlers(origState, {
    handleChange: state => ({ target }) => ({
      ...state,
      [target.name]: target.value
    })
  });

/*
type EventType = { target: { name: string; value: string | number | boolean } };
export const changeHandler = function<T = object>(origState: T) {
  return withStateHandlers<T, EventType, EventType>(origState, {
    handleChange: state => ({ target }) => ({
      ...state,
      [target.name]: target.value
    })
  });
};
*/
