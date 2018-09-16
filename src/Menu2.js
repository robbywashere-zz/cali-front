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
import * as actions from "./redux/actions";

const Root = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography).attrs({
  variant: "title",
  color: "inherit"
})`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton).attrs({
  color: "inherit",
  "aria-label": "Menu"
})`
  margin-left: -12;
  margin-right: 20;
`;

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null
  };

  logout = () => this.props.actions.logout();

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { authed } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Root>
        <AppBar position="static">
          <Toolbar>
            <MenuButton>
              <MenuIcon />
            </MenuButton>
            <Title>cool</Title>
            {authed && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.logout}>Logout</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
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
)(MenuAppBar);
