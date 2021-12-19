import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { CustomDateInput } from "./layout/CustomDateInput";
import { filterTransactions, getTransactions } from "../actions/transactions";
import { NOT_SELECTED } from "../common/constants";

const SearchPanel = (props) => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  // filter unique subjects
  const subjects = [
    NOT_SELECTED,
    ...props.transactions
      .map((transaction) => transaction.subject)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  const [condition, setCondition] = useState({
    from: null,
    to: null,
    subject: { index: 0, value: NOT_SELECTED },
    minAmount: null,
    maxAmount: null,
  });

  useEffect(() => {
    props.filterTransactions(condition);
  }, [props.transactions, condition]);

  return (
    <div className={props.className + " cursor-default"}>
      <div className='border-b flex justify-between pb-1'>
        <span className='text-xs font-light'>Filter Expenses</span>
        <button className='text-xs font-normal text-blue-600 hover:text-blue-400'>
          Clear Filters
        </button>
      </div>
      <div className='grid grid-cols-1 gap-y-5 mt-6'>
        <div className='flex flex-col'>
          <p className='text-xs'>From</p>
          <DatePicker
            selected={condition.from}
            onChange={(date) => setCondition({ ...condition, from: date })}
            isClearable
            customInput={<CustomDateInput className='w-5/6 bg-gray-300' />}
          />
          <p className='text-xs mt-2'>To</p>
          <DatePicker
            selected={condition.to}
            onChange={(date) => setCondition({ ...condition, to: date })}
            isClearable
            customInput={<CustomDateInput className='w-5/6 bg-gray-300' />}
          />
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <p className='text-xs text-center'>min</p>
            <input
              className='w-full bg-gray-300 rounded-sm'
              type='number'
              onChange={(e) =>
                setCondition({ ...condition, minAmount: e.target.value })
              }
              value={condition.minAmount || ""}
            ></input>
          </div>
          <div className='mx-1 grid place-items-end'>
            <p>~</p>
          </div>
          <div className='w-1/2'>
            <p className='text-xs text-center'>max</p>
            <input
              className='w-full bg-gray-300 rounded-sm'
              type='number'
              onChange={(e) =>
                setCondition({ ...condition, maxAmount: e.target.value })
              }
              value={condition.maxAmount || ""}
            ></input>
          </div>
        </div>
        <div>
          <p className='text-xs'>Subject</p>
          <select
            className='bg-gray-300 rounded-sm w-full text-sm font-light'
            onChange={(e) =>
              setCondition({
                ...condition,
                subject: {
                  index: e.target.options.selectedIndex,
                  value: e.target.value,
                },
              })
            }
          >
            {subjects.map((subject, index) => (
              <option value={subject} key={index}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps, { filterTransactions })(SearchPanel);
