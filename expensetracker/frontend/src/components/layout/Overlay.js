import React from "react";

export const Overlay = ({ isHidden = true, className = "", children }) => {
  const customedClass = isHidden ? " hidden" : "";

  return (
    <div
      className={
        "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" +
        " " + customedClass + " " + className
      }
    >
      {children}
    </div>
  );
};
