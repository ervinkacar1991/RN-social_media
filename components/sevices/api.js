import instance from "./config";

const login = async (values) => {
  const resp = await instance.post("/accounts/login/", values);
  return resp.data;
};

const signup = async (values) => {
  const resp = await instance.post("/accounts/signup/", values);
  return resp.data;
};

const api = {
  login,
  signup,
};

export default Object.freeze(api);
