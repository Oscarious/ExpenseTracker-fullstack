import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CustomDateInput } from "./layout/CustomDateInput";
import { addTransaction } from "../actions/transactions";
import { connect } from "react-redux";

const EditTransaction = ({ onCancel, addTransaction }) => {
  const [date, setDate] = useState(new Date());
  const [dateStr, setDateStr] = useState(date.toISOString().split("T")[0]);
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");

  const onSave = () => {
    addTransaction({ subject, amount, comment, created_at: dateStr });
  };

  return (
    <div className='bg-white rounded-md w-72'>
      <div className='m-4'>
        <h2 className='font-bold text-xl mb-3'>Add Transaction</h2>
        <div className='flex justify-between'>
          <div className='grid grid-cols-1 gap-y-3'>
            <div>
              <p className='text-xs'>Subject</p>
              <input
                type='text'
                className='bg-gray-200 rounded-sm text-sm font-light w-full p-1'
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <p className='text-xs'>Amount</p>
              <input
                type='number'
                className='bg-gray-200 rounded-sm text-sm font-light w-full p-1'
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-xs'>Date</p>
              <DatePicker
                selected={date}
                onChange={(date) => {
                  const dateStr = date.toISOString().split("T")[0];
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
                className='bg-gray-200 rounded-sm text-sm h-20 p-1'
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <div className='grid grid-cols-1 place-items-center mr-2'>
            <button
              className='bg-blue-500 rounded-md text-white w-16 hover:bg-blue-600'
              onClick={onSave}
            >
              Save
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

export default connect(null, { addTransaction })(EditTransaction);
