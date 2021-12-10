import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.login({ username, password });
  };

  if (props.isAuthenticated) return <Navigate to='/' />;
  else
    return (
      <div className='bg-grey-lighter min-h-1/2 mt-4 flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>Sign in</h1>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='username'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'
              >
                Sign in
              </button>
            </form>
            <div className='text-center text-sm text-grey-dark mt-4'>
              Don' have an account?
              <br />
              <Link
                className='no-underline border-b border-grey-dark text-grey-dark'
                to='/register'
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
