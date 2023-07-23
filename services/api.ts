import { LoginValues } from "../components/loginScreen/LoginForm";
import instance from "./config";

const login = async (values: LoginValues) => {
  const resp = await instance.post("/accounts/login/", values);
  return resp.data;
};

const signup = async (values) => {
  const resp = await instance.post("/accounts/signup/", values);
  return resp.data;
};

const fetchUser = async () => {
  const resp = await instance.get("/accounts/me/");
  return resp.data;
};

const fetchPosts = async () => {
  const resp = await instance.get("/feed/public-posts/");
  return resp.data;
};

const fetchLikes = async (username: string, post_id: string) => {
  const resp = await instance.get(`/feed/${username}/posts/${post_id}/likes/`);
  return resp.data;
};

const fetchSuggestedUsers = async () => {
  const resp = await instance.get("/search/users/suggestions/");
  return resp.data;
};

const fetchSearchUsers = async (searchTerm: string) => {
  const resp = await instance.get(
    `/search/users/?search=${searchTerm}&limit=10`
  );
  return resp.data;
};

const api = {
  login,
  signup,
  fetchPosts,
  fetchLikes,
  fetchSearchUsers,
  fetchSuggestedUsers,
  fetchUser,
};

export default Object.freeze(api);
