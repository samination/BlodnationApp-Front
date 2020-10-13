import { ACTION_TYPES } from "../actions/Login";

const initialState = {};

export const message= (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_MESSAGE:
      return { message: payload };

    case ACTION_TYPES.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}