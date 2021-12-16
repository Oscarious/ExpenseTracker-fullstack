import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CustomDateInput } from "./layout/CustomDateInput";

export const SearchPanel = (props) => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

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
            selected={from}
            onChange={(date) => setFrom(date)}
            isClearable
            customInput={<CustomDateInput className='w-5/6 bg-gray-300'/>}
          />
          <p className='text-xs mt-2'>To</p>
          <DatePicker
            selected={to}
            onChange={(date) => setTo(date)}
            isClearable
            customInput={<CustomDateInput className='w-5/6 bg-gray-300'/>}
          />
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <p className='text-xs text-center'>min</p>
            <input
              className='w-full bg-gray-300 rounded-sm'
              type='number'
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
            ></input>
          </div>
        </div>
        <div>
          <p className='text-xs'>Subject</p>
          <select className='bg-gray-300 rounded-sm w-full text-sm font-light'>
            <option value='sub1'>sub1</option>
            <option value='sub2'>sub2</option>
            <option value='sub3'>sub3</option>
            <option value='sub4'>sub4</option>
          </select>
        </div>
      </div>
    </div>
  );
};
