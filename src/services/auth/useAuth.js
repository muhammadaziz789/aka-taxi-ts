import { useMutation } from "react-query";
import authService from "./authService";
const useAuth = ({ registerProps, loginProps, refreshProps }) => {
  const signup = useMutation(authService.registerFn, registerProps);
  const login = useMutation(authService.loginFn, loginProps);
  const refresh = useMutation(authService.refreshTokenFn, refreshProps);

  return {
    signup,
    login,
    refresh,
  };
};

export default useAuth;
