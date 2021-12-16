import React, { useEffect } from "react";
import Register from "../accounts/Register";
import Login from "../accounts/Login";
import { Dashboard } from "../Dashboard";
import Header from "../layout/Header";
import { loadUser } from "../../actions/auth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const ExpenseTracker = (props) => {
  useEffect(() => {
    props.loadUser();
  }, [props.auth.isAuthenticated]);

  return (
    <Router>
      <Header className='flex justify-between py-2 bg-gray-800 flex-initial' />
      <Routes>
        <Route
          exact
          path='/'
          element={<Dashboard className='flex-auto grid grid-cols-5 select-none' />}
        />
        <Route exact path='login' element={<Login />} />
        <Route exact path='register' element={<Register />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { loadUser })(ExpenseTracker);
