import { LOGIN, LOGOUT } from "./constants";

type Actions = "LOGIN" | "LOGOUT";

export const login = (
  state = { authed: false, profile: {} },
  action: { type: Actions; [x: string]: string }
) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, authed: true, profile: action.profile };
    case LOGOUT:
      return { ...state, authed: false };
    default:
      return state;
  }
};
