import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Provider as AlterProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import store from "../store";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

export const App = () => {
  return (
    <div className='bg-gray-50 m-auto w-3/4'>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Balance />
          <TransactionList />
          <AddTransaction />
        </AlertProvider>
      </Provider>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
