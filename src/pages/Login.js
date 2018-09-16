import React from "react";

import Typography from "@material-ui/core/Typography";

import { Form, Layout, MainPaper } from "../form/Layout";

import { SubmitButton } from "../form/Buttons";

import axios from "axios";

import { Password, TextField } from "../form/Fields";

import { LockAvatar } from "../form/Misc";

import { Formik } from "formik";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as actions from "../redux/actions";

export class Login extends React.Component {
  submit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      if (!username || !password) return;
      const { data } = await axios.post("/auth", { username, password });
      this.props.actions.login(data);
      this.props.history.push("/");
    } catch (e) {
      console.log(e);
      alert(`Login error ${e.statusText || e}`);
    }
  };
  update = property => ({ target: { value } }) => {
    this.setState({ [property]: value });
  };
  alert() {}
  render() {
    return (
      <Layout>
        <MainPaper>
          <LockAvatar />
          <Typography variant="headline">Login</Typography>
          <Form onSubmit={this.submit}>
            <TextField
              autoFocus
              name="username"
              update={this.update("username")}
            >
              Username
            </TextField>
            <Password update={this.update("password")}>Password</Password>
            <SubmitButton>Login</SubmitButton>
          </Form>
        </MainPaper>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ login: state.login });
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
