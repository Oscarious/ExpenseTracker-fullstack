import { EMPTY_TEXT_ERROR } from "./types";

export const raiseEmptyTextError = (error) => (dispatch) => {
  dispatch({
    type: EMPTY_TEXT_ERROR,
    payload: {
      msg: {
        client: [error],
      },
      status: null,
    },
  });
};

export const errorMessage = (type, msg, status = null) => ({
  type,
  payload: { msg, status },
});
