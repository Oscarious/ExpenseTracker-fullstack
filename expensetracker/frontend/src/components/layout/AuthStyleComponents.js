import React from "react";
import { Link } from "react-router-dom";

export const StyledLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='text-sm text-blue-400 hover:text-white bg-gray-700 rounded-md p-1.5'
    >
      {children}
    </Link>
  );
};

export const StyledButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='text-sm text-blue-400 hover:text-white bg-gray-700 rounded-md p-1.5'
    >
      {children}
    </button>
  );
};
