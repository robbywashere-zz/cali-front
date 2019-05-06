export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const actions = {
  login: (profile: object) => ({ type: LOGIN, profile }),
  logout: () => ({ type: LOGOUT })
};

type Actions = typeof LOGIN | typeof LOGOUT;

export const Login = (
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
