import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import store from "../store";
import Alerts from "./layout/Alerts";
import { Register } from "../components/accounts/Register";
import { Login } from "../components/accounts/Login";
import { Dashboard } from "./Dashboard";
import { loadUser } from "../actions/auth";
import { USER_LOADING } from "../actions/types";
import ExpenseTracker from "./routes/ExpenseTracker";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

export const App = () => {
  return (
    <div className='bg-gray-50 m-0 h-screen flex flex-col'>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Alerts />
          <ExpenseTracker />
        </AlertProvider>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
