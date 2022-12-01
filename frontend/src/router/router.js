import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
  Login,
  Register,
  Dashboard,
  ITSupportRequest,
  UserProfile,
  Logout,
  Redirect,
  GroupDetail
} from "../pages";

import { Header, Footer } from "../_components";

// CSS Files
// Bootstrap CSS
import "../assets/plugins/bootstrap/css/bootstrap.min.css";

// Font Awesome
import "../assets/plugins/fontawesome/css/fontawesome.min.css";
import "../assets/plugins/fontawesome/css/all.min.css";

// Custom CSS
import "../assets/css/style.css";
import { ProtectedRoute } from "./ProtectedRoute";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router basename={`/`}>
        <div className="main-wrapper">
          {/* <Route render={(props) => <Header {...props} />} /> */}

          <Switch>
            <ProtectedRoute exact path="/" component={Redirect} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/group/:id" component={GroupDetail} />
            {/* <ProtectedRoute path="/it-support-request" component={ITSupportRequest} /> */}
            <ProtectedRoute path="/user-profile" component={UserProfile} />
            <ProtectedRoute path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={Redirect} />
          </Switch>
          <Route render={(props) => <Footer {...props} />} />
        </div>
      </Router>
    );
  }
}
export { RouterComponent };
