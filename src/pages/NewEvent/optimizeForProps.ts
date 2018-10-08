import { shouldUpdate } from "recompose";
//import withPropsChecker from "./withPropsChecker";
export default (...keys) =>
  shouldUpdate((props, nextProps) =>
    Object.keys(nextProps)
      .filter(key => keys.includes(key))
      .filter(
        key => JSON.stringify(nextProps[key]) !== JSON.stringify(props[key])
      )
      .some(Boolean)
  );
