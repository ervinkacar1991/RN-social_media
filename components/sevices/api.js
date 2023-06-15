import instance from "./config";

const login = async (values) => {
  const resp = await instance.post("/accounts/login/", values);
  return resp.data;
};

const signup = async (values) => {
  const resp = await instance.post("/accounts/signup/", values);
  return resp.data;
};

const fetchPosts = async () => {
  const resp = await instance.get("/feed/posts/");
  return resp.data;
};

const api = {
  login,
  signup,
  fetchPosts,
};

export default Object.freeze(api);
