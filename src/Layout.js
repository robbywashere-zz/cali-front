import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withTheme from "@material-ui/core/styles/withTheme";
import NavBar from "./elements/NavBar";
import { ThemeProvider } from "styled-components";

class Layout extends React.Component {
  render() {
    const { theme, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <main>
            <NavBar />
            {children}
          </main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withTheme()(Layout);
