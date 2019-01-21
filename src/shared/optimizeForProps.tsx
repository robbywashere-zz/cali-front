import { shouldUpdate } from "recompose";
//import withPropsChecker from "./withPropsChecker";
export default (...keys: any) =>
  shouldUpdate((props, nextProps) =>
    Object.keys(nextProps)
      .filter(key => keys.includes(key))
      .filter(
        key =>
          JSON.stringify((nextProps as any)[key]) !==
          JSON.stringify((props as any)[key])
      )
      .some(Boolean)
  );
