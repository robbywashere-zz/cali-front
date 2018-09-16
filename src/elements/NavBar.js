import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions";
import { NavLink } from "./NavLink";

const Root = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography).attrs({
  variant: "title",
  color: "inherit"
})`
  color: "inherit";
  flex-grow: 1;
`;

class NavBar extends React.Component {
  render() {
    return (
      <Root>
        <AppBar position="static">
          <Toolbar>
            <Title>cool</Title>
            <NavLink component={Link} to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink component={Link} to="/events">
              Event Types
            </NavLink>
            <NavLink component={Link} to="/">
              Help
            </NavLink>
          </Toolbar>
        </AppBar>
      </Root>
    );
  }
}

function mapDispatch(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}
const mapState = state => ({ authed: state.login.authed });
export default connect(
  mapState,
  mapDispatch
)(NavBar);
