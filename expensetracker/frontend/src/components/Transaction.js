import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "../actions/transactions";

export const Transaction = ({ transaction, ...props }) => {
  const sig = transaction.amount < 0 ? "-" : "+";

  return (
    <li>
      {/* {dateHeading} */}
      <div className='my-2 relative border-2 shadow-md group bg-white'>
        <div
          className={`py-2 flex justify-between border-r-4 ${
            sig === "-" ? "border-red-600" : "border-green-600"
          }`}
        >
          <span className='px-3'>{transaction.text}</span>
          <span className='px-3'>{`${sig}$${Math.abs(
            transaction.amount
          ).toFixed(2)}`}</span>
        </div>
        <button
          className='py-0 px-1 absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-red-700 text-white group-hover:opacity-100 transition-opacity opacity-0 focus:outline-none'
          onClick={() => props.deleteTransaction(transaction.id)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default connect(null, { deleteTransaction })(Transaction);
