import React, { useEffect } from "react";

export const Alerts = (props) => {
  useEffect(() => {

    return () => {
      cleanup
    }
  }, [props.error, props.message])

  return <div></div>;
};
