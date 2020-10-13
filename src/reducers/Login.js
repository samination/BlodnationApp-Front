import { ACTION_TYPES } from "../actions/Login";


const user = JSON.parse(localStorage.getItem("user"));



const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };





  export const login =(state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      
      case ACTION_TYPES.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case ACTION_TYPES.LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };

        case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
      
      default:
        return state;
    }
  }

