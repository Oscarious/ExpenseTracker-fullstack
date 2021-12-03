import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  // const authLinks = (
  //   <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
  //       <span className="navbar-text mr-3">
  //         <strong>{user ? `Welcome ${user.username}` : ''}</strong>
  //       </span>
  //       <li className="nav-item">
  //         <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
  //           Logout
  //         </button>
  //       </li>
  //     </ul>
  // )

  const guestLinks = (
    <ul className='flex pr-2 mt-2'>
      <li className='mr-6'>
        <Link to='/register' className='text-white hover:text-blue-900'>
          Register
        </Link>
      </li>
      <li>
        <Link to='/login' className=' text-white hover:text-blue-900'>
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
      {guestLinks}
    </nav>
  );
};
