import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import React from "react";

import { PathBar, Sidebar } from "../_components";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuth) {
          return (
            <div>
              <PathBar {...props} />
              <div className="content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                      <Sidebar />
                    </div>
                    <div className="col-md-7 col-lg-8 col-xl-9">
                      <Component />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
