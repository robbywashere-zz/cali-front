import React from "react";
import NavBar from "../elements/NavBar";
import Login from "../pages/Login";
import EventTypes from "../pages/EventTypes";
import Layout from "../Layout";
import SignUp from "../pages/SignUp";
import NewEvent from "../pages/NewEvent";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = () => <div>Home</div>;

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
      <NavBar authed={authed} />
      <PrivateRoute exact authed={authed} path="/" component={Home} />
      <PrivateRoute
        exact
        authed={authed}
        path="/new-event"
        component={NewEvent}
      />
      <PrivateRoute
        authed={authed}
        path="/event-types"
        component={EventTypes}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Layout>
  </Router>
);

//TODO export default connect(state => ({ authed: state.login.authed }))(Routes);
export default connect(state => ({ authed: true }))(Routes);
