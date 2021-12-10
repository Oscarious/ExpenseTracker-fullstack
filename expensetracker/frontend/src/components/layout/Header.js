import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

const Header = (props) => {
  const onLogout = (e) => {
    props.logout();
  };

  const authLinks = (
    <div className='flex flex-col items-end text-white cursor-default mr-2'>
      <div>
        <strong>Welcome </strong>
        <strong className='hover:text-blue-900'>
          {props.user ? props.user.username : ""}
        </strong>
        <strong> !</strong>
      </div>
      <div>
        <button
          className='hover:text-blue-900 text-sm border-none'
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );

  const guestLinks = (
    <ul className='flex pr-2 mt-2'>
      <li className='mr-6'>
        <Link to='/register' className='text-white hover:text-blue-900'>
          Register
        </Link>
      </li>
      <li>
        <Link to='/login' className='text-white hover:text-blue-900'>
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='flex justify-between py-2 bg from-red-300 to-blue-300 bg-gradient-to-tl'>
      <a className='navbar-brand text-4xl font-light pl-2' href='/'>
        Expense Tracker
      </a>
      {props.isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logout })(Header);
