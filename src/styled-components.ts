import * as styledComponents from "styled-components";
import {
  ThemedStyledComponentsModule,
  ThemedStyledInterface
} from "styled-components";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { theme } from "./misc/withRoot";
import baseStyled from "./styled-components";

export interface ThemeInterface extends Theme {}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
export const styledT = baseStyled as ThemedStyledInterface<{ foo: string }>;
