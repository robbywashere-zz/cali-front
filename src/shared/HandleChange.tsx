import { withStateHandlers } from "recompose";

export type HandleChangeType<T, U = string> = (
  event: GenericEvent<T, U>,
  value?: U
) => void;
export type ResetChangeType = () => void;

/*export type ChangeHandlerProps<T extends string, U = string> = {
  handleChange: HandleChangeType<T, U>;
} & { [key in T]: U };*/

export type ChangeHandlerProps<T> = {
  handleChange: HandleChangeType<keyof T, T[keyof T]>;
} & T;

export type ChangeResetHandlerProps<T> = ChangeHandlerProps<T> & {
  resetChange?: ResetChangeType;
};

type GenericEvent<T, U> = {
  target: {
    name: T;
    value: U;
  };
};

export function anyEvent<T extends string, U>(
  name: T,
  value: U,
  origEvent = { target: {} } as any
) {
  return {
    ...origEvent,
    target: { ...origEvent.target, name, value }
  } as GenericEvent<T, U>;
}

//let x = anyEvent("tzLocale", "okaythanks");

export const GenEvent = anyEvent;

export function changeHandler<T>(origState: T) {
  return withStateHandlers(origState, {
    handleChange: state => ({ target }) => {
      return {
        ...state,
        [target.name]: target.value
      } as T;
    },
    resetChange: state => () => origState
  });
}
