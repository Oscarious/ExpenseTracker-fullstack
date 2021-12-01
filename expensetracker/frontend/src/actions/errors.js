import { EMPTY_TEXT_ERROR } from "./types"

export const raiseEmptyTextError = (error) => (dispatch) => {
  dispatch({
    type: EMPTY_TEXT_ERROR,
    payload: error
  })
}