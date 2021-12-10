import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Route } from "react-router-dom";

const PrivateRoute = ({ element: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) return <h2>Loading...</h2>;
        if (auth.isAuthenticated) return <Navigate to='/login' />;
        else return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
