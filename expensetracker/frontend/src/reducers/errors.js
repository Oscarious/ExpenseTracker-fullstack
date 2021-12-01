import { EMPTY_TEXT_ERROR } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_TEXT_ERROR:
      return {...state, msg: action.payload};
    default:
      return state;
  }
};
