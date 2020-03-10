import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        // redirect to Login if user object not present
        // TODO: stop prettier from messing up ternary formatting
        localStorage.getItem("user") ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
