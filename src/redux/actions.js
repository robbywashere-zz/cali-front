import { LOGOUT, LOGIN } from "./constants";
export const login = profile => ({ type: LOGIN, profile });
export const logout = () => ({ type: LOGOUT });
