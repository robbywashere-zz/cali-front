import React from "react";
import Typography from "@material-ui/core/Typography";
import { Form, Layout, MainPaper } from "../form/FormLayout";
import { SubmitButton } from "../form/Buttons";
import axios from "axios";
import { Password, TextField, TextFieldProps } from "../form/Fields";
import { LockAvatar } from "../form/Misc";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { actions } from "../redux/Login";
import { RouterProps } from "react-router";
import { InputProps } from "@material-ui/core/Input";

export class Login extends React.Component<
  {
    login: (profile: object) => void;
  } & RouterProps
> {
  state = {
    username: "",
    password: ""
  };
  submit = async (event: any) => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      if (!username || !password) return;
      const { data } = await axios.post("/auth", { username, password });
      this.props.login(data);
      this.props.history.push("/");
    } catch (e) {
      console.log(e);
      alert(`Login error ${e.statusText || e}`);
    }
  };
  update = (property: "username" | "password") => ({
    target: { value }
  }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

//const mapStateToProps = state => ({ login: state.login });
function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators<{}, { login: (data: object) => void }>(
    actions,
    dispatch
  );
}
export default connect(
  null,
  mapDispatchToProps
)(Login);
