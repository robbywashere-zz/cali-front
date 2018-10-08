import { compose, toRenderProps, withState, withHandlers } from "recompose";
export const RadioGroupState = toRenderProps(
  compose(
    withState(
      "selectedValue",
      "selectValue",
      ({ defaultSelected } = {}) => defaultSelected
    ),
    withHandlers({
      handleChange: ({ selectValue }) => {
        return event => {
          return selectValue(event.target.value);
        };
      }
    })
  )
);
