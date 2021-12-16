import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { StyledLink, StyledButton } from "./AuthStyleComponents";

const Header = (props) => {
  const onLogout = (e) => {
    props.logout();
  };

  const authLinks = (
    <ul className='flex pr-2 my-auto'>
      <li className='text-sm text-white mr-6 my-auto cursor-default'>
        <strong>Welcome </strong>
        <strong className='hover:text-blue-200'>
          {props.user ? props.user.username : ""}
        </strong>
        <strong> !</strong>
      </li>
      <li>
        <StyledButton onClick={onLogout}>Logout</StyledButton>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='flex pr-2 my-auto'>
      <li className='mr-6'>
        <StyledLink to='/register'>Register</StyledLink>
      </li>
      <li>
        <StyledLink to='/login'>Login</StyledLink>
      </li>
    </ul>
  );

  return (
    // <nav className='flex justify-between py-2 bg-gray-800 flex-initial'>
    <nav className={props.className}>
      <a
        className='navbar-brand text-xl font-bold text-white my-auto pl-4'
        href='/'
      >
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
