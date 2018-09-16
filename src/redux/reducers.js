import { LOGIN, LOGOUT } from "./constants";

export const login = (state = { authed: false, profile: {} }, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, authed: true, profile: action.profile };
    case LOGOUT:
      return { ...state, authed: false };
    default:
      return state;
  }
};
