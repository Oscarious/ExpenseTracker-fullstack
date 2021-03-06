import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CustomDateInput } from "./layout/CustomDateInput";
import {
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "../actions/transactions";
import { connect } from "react-redux";
import { raiseEmptyTextError } from "../actions/errors";
import { date2LocaleDateStr } from "../common/utils";

const EditTransaction = ({
  transaction,
  onCancel,
  isDeletable = false,
  ...props
}) => {
  const [date, setDate] = useState(new Date());
  const [dateStr, setDateStr] = useState(date2LocaleDateStr(date));
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const subjects = props.transactions
    .map((transaction) => transaction.subject)
    .filter((value, index, self) => self.indexOf(value) === index);

  useEffect(() => {
    if (!isDeletable) {
      setDate(new Date());
      setDateStr(date2LocaleDateStr(date));
      setSubject("");
      setAmount(0);
      setComment("");
    } else {
      const dateArr = transaction.created_at.split("-");
      setDate(new Date(dateArr[0], dateArr[1] - 1, dateArr[2]));
      setDateStr(transaction.created_at);
      setSubject(transaction.subject);
      setAmount(transaction.amount);
      setComment(transaction.comment);
    }
  }, [transaction]);

  return (
    <div className='bg-white rounded-md w-96'>
      <div className='m-4'>
        <h2 className='font-bold text-xl mb-3'>
          {isDeletable ? "Edit Transaction" : "Add Transaction"}
        </h2>
        <div className='flex justify-between'>
          <div className='w-2/3 grid grid-cols-1 gap-y-3'>
            <div>
              <p className='text-xs'>Subject</p>
              <div className='relative'>
                <select
                  onChange={(e) => setSubject(e.target.value)}
                  className='bg-gray-200 rounded-sm text-sm font-light p-1 w-full outline-none'
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <input
                  type='text'
                  name='format'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='absolute left-0 w-11/12 bg-gray-200 rounded-sm text-sm font-light p-1 outline-none'
                />
              </div>
            </div>
            <div>
              <p className='text-xs'>Amount</p>
              <input
                type='number'
                className='bg-gray-200 rounded-sm text-sm font-light w-full p-1'
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-xs'>Date</p>
              <DatePicker
                selected={date}
                onChange={(date) => {
                  const dateStr = date2LocaleDateStr(date);
                  setDate(date);
                  setDateStr(dateStr);
                }}
                customInput={<CustomDateInput className='w-full bg-gray-200' />}
              />
            </div>
            <div>
              <p className='text-xs'>Comment</p>
              <textarea
                type='text'
                className='bg-gray-200 rounded-sm text-sm h-20 p-1 w-full'
                onChange={(e) => setComment(e.target.value)}
                value={comment ? comment : ""}
              />
            </div>
          </div>
          <div className='grid grid-cols-1 place-items-center mr-2'>
            <button
              className='bg-blue-500 rounded-md text-white w-16 hover:bg-blue-600'
              onClick={() => {
                if (!subject || !subject.length) {
                  props.raiseEmptyTextError("subject shouldn't be empty");
                  return;
                }
                if (!isDeletable) {
                  props.addTransaction({
                    subject,
                    amount,
                    comment,
                    created_at: dateStr,
                  });
                } else {
                  props.updateTransaction({
                    id: transaction.id,
                    subject,
                    amount,
                    comment,
                    created_at: dateStr,
                  });
                }
                onCancel();
              }}
            >
              Save
            </button>
            <button
              className={`bg-red-600 rounded-md text-white w-16 hover:bg-red-500 ${
                isDeletable ? "" : "hidden"
              }`}
              onClick={() => {
                props.deleteTransaction(transaction.id);
                onCancel();
              }}
            >
              Delete
            </button>
            <button
              className='bg-gray-100 rounded-md text-blue-400 w-16 hover:bg-gray-200'
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToPros = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToPros, {
  addTransaction,
  deleteTransaction,
  updateTransaction,
  raiseEmptyTextError,
})(EditTransaction);
