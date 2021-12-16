import React, { forwardRef } from "react";

export const CustomDateInput = forwardRef(({ value, onClick, className }, ref) => {
  return (
    <button
      className={'rounded-sm font-light text-sm' + ' ' + className }
      onClick={onClick}
      ref={ref}
    >
      {value === "" ? "--/--/----" : value}
    </button>
  );
});
