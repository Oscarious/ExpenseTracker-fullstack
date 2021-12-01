import React, { useEffect } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export const Alerts = (props) => {
  useEffect(() => {
    const { error, alert, message } = props;
    if (error.msg) {
      alert.error(error.msg);
    }
  }, [props]);

  return <></>;
};

const mapStateToProps = (state) => ({
  error: state.errorsReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
