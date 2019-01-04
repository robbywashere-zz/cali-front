import React from "react";
import NavBar from "../elements/NavBar";
import Login from "../pages/Login";
import EventTypes from "../pages/EventTypes";
import Layout from "../Layout";
import SignUp from "../pages/SignUp";
import NewEvent from "../pages/NewEvent";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";
import { connect } from "react-redux";

const Home: React.SFC<{}> = () => <div>Home</div>;

const PrivateRoute: React.SFC<
  {
    component: any; //RouteProps["component"]; !?
    authed: boolean;
  } & RouteProps
> = ({ component: Component, authed, ...rest }) => (
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

const Routes: React.SFC<{ authed: boolean }> = ({ authed }) => (
  <Router>
    <Layout>
      <NavBar />
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
