import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withTheme from "@material-ui/core/styles/withTheme";
import { ThemeProvider } from "styled-components";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

type LayoutProps = {
  theme: Theme;
};
class Layout extends React.Component<LayoutProps> {
  render() {
    const { theme, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <main>{children}</main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withTheme()(Layout);
