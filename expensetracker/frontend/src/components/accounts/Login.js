import React,{ useState } from "react";

export const Login = () => {
  return (
    <div className='bg-grey-lighter min-h-1/2 mt-4 flex flex-col'>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center'>Sign in</h1>
          <input
            type='text'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            name='email'
            placeholder='Email'
          />

          <input
            type='password'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            name='password'
            placeholder='Password'
          />

          <button
            type='submit'
            className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'
          >
            Create Account
          </button>
          <div className='text-center text-sm text-grey-dark mt-4'>
            Don' have an account?
            <br />
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
