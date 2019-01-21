import { compose, toRenderProps, withState, withHandlers } from "recompose";
import React from "react";

type Event = React.ChangeEvent<{}>;

const withRadioGroupState = withState<
  { defaultSelected?: {} },
  {},
  string,
  string
>(
  "selectedValue",
  "selectValue",
  ({ defaultSelected } = {}) => defaultSelected
);

export const RadioGroupState = toRenderProps<
  {
    handleChange: (e: any, v: string | number | boolean) => void;
    selectedValue: string;
  },
  {
    defaultSelected?: string | number;
  }
>(
  compose(
    withRadioGroupState,
    withHandlers<{ selectValue: (v: string | number | boolean) => void }, {}>({
      handleChange: ({ selectValue }) => (
        e: any,
        v: string | number | boolean
      ) => selectValue(v)
    })
  )
);
