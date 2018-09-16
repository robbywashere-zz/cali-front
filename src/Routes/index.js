import React from "react";
import PropTypes from "prop-types";
import Login from "../pages/Login";
import Layout from "../Layout";
import SignUp from "../pages/SignUp";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = () => <div>Home</div>;
const Billboard = () => <div>Billboard</div>;

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = ({ authed }) => (
  <Router>
    <Layout>
      <PrivateRoute exact authed={authed} path="/" component={Home} />
      <PrivateRoute authed={authed} path="/billboards" component={Billboard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Layout>
  </Router>
);

export default connect(state => ({ authed: state.login.authed }))(Routes);
