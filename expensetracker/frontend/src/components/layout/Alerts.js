import React, { useEffect } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export const Alerts = (props) => {
  useEffect(() => {
    const { error, alert, message } = props;
    if (error.msg) {
      if (error.msg.username) alert.error(`username: ${error.msg.username.join()}`);
      else if (error.msg.email) alert.error(`email: ${error.msg.email.join()}`);
      else if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      else if (error.msg.client) alert.error(error.msg.client.join());
      else if (error.msg.password) alert.error(`password: ${error.msg.password.join()}`);
      else if (error.msg.comment) alert.error(`comment: ${error.msg.comment.join()}`);
      else {
        console.log(error.msg);
        alert.error('unknown errors see console for more details');
      }
    }
  }, [props]);

  return <></>;
};

const mapStateToProps = (state) => ({
  error: state.errorsReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
