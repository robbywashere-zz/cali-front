import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "./NavLink";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import * as actions from "../redux/actions";
import { NavMenu, NavMenuProps } from "./NavMenu";
import React from "react";

const Root = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography).attrs({
  variant: "title",
  color: "inherit"
})`
  && {
    font-size: 2em;
    flex-grow: 1;
    font-weight: 100;
    text-transform: uppercase;
  }
`;

const MenuAppBar: React.SFC<NavMenuProps> = ({ logout }) => (
  <Root>
    <AppBar position="static">
      <Toolbar>
        <Title>cali</Title>
        <NavLink to="/event/types">Event Types</NavLink>
        <NavLink to="/dashboard">DashBoard</NavLink>
        <NavMenu logout={logout} />
      </Toolbar>
    </AppBar>
  </Root>
);

function mapDispatch(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(actions, dispatch);
}
const mapState = (state: { login: { authed: boolean } }) => ({
  authed: state.login.authed
});
export default connect(
  mapState,
  mapDispatch
)(MenuAppBar);
