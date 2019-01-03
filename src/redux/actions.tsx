import { LOGOUT, LOGIN } from "./constants";
export const login = (profile: object) => ({ type: LOGIN, profile });
export const logout = () => ({ type: LOGOUT });
