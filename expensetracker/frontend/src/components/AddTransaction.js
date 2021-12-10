import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions/transactions";
import { EMPTY_TEXT_ERROR } from "../actions/types";
import store from "../store";
import { errorMessage } from "../actions/messages";

export const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onClick = () => {
    if (text.length === 0) {
      store.dispatch(
        errorMessage(EMPTY_TEXT_ERROR, {client: ["Text should not be empty"]})
      );
      return;
    }
    props.addTransaction({ text: text, amount: Number(amount) });
  };

  return (
    <div className='mt-10'>
      <h2 className='text-lg font-semibold border-solid border-b-2'>
        Add New Transaction
      </h2>
      <h3 className='mt-2'>Text</h3>
      <input
        type='text'
        className='mt-1 border-2 w-full h-10'
        placeholder='Enter Text...'
        onChange={(e) => setText(e.target.value)}
      />
      <h3 className='mt-2'>Amount</h3>
      <label className='tracking-tighter'>
        (negative - expense, positive - income)
      </label>
      <input
        type='number'
        className='mt-1 border-2 w-full h-10'
        placeholder='Enter Amount...'
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className='mt-6 w-full h-12 rounded-md bg-indigo-400 transform hover:bg-indigo-300 active:-translate-y-1 transition active:bg-indigo-500'
        onClick={onClick}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default connect(null, { addTransaction })(AddTransaction);
