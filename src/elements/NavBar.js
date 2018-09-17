import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "./NavLink";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { NavMenu } from "./NavMenu";
import React from "react";

const Root = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography).attrs({
  variant: "title",
  color: "inherit"
})`
  flex-grow: 1;
`;

const MenuAppBar = () => (
  <Root>
    <AppBar position="static">
      <Toolbar>
        <Title>çalí</Title>
        <NavLink to="/event-types">Event Types</NavLink>
        <NavLink to="/dashboard">DashBoard</NavLink>
        <NavMenu />
      </Toolbar>
    </AppBar>
  </Root>
);

function mapDispatch(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}
const mapState = state => ({ authed: state.login.authed });
export default connect(
  mapState,
  mapDispatch
)(MenuAppBar);
