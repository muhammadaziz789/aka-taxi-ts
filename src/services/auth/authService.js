import requestAuth from "../../utils/requestAuth";
const authService = {
  loginFn: (data) => requestAuth.post("admin/login", data),
  registerFn: (data) => requestAuth.post(`/admin/register`, data),
  refreshTokenFn: (data) => requestAuth.post("/refresh", data),
};

export default authService;
