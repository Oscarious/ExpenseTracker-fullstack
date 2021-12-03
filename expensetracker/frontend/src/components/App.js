import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import store from "../store";
import Alerts from "./layout/Alerts";
import { Header } from "./layout/Header";
import { Register } from "../components/accounts/Register";
import { Login } from "../components/accounts/Login";
import { Dashboard } from "./Dashboard";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

export const App = () => {
  return (
    <div className='bg-gray-50 m-auto w-3/4'>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <>
              <Alerts />
              <Header />
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='login' element={<Login />} />
                <Route exact path='register' element={<Register />} />
              </Routes>
            </>
          </Router>
        </AlertProvider>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));