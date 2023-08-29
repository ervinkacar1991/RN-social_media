import { LoginValues } from "../components/loginScreen/LoginForm";
import { User } from "../models/User";
import instance from "./config";

const login = async (values: LoginValues) => {
  const resp = await instance.post("/accounts/login/", values);
  return resp.data;
};

const signup = async (values) => {
  const resp = await instance.post("/accounts/signup/", values);
  return resp.data;
};

const logout = async () => {
  const resp = await instance.post("/accounts/logout/");
  return resp.data;
};

const fetchUser = async (): Promise<User> => {
  const resp = await instance.get<User>("/accounts/me/");
  return resp.data;
};

const fetchPosts = async () => {
  const resp = await instance.get("/feed/posts/");
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

const fetchSearchPosts = async (searchTerm: string) => {
  try {
    const resp = await instance.get(`/search/posts/?search=${searchTerm}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
const fetchSearchPeople = async (searchTerm: string) => {
  try {
    const resp = await instance.get(`/search/pets/?search=${searchTerm}`);

    return resp.data;
  } catch (error) {
    throw error;
  }
};

const fetchUserEntities = async (username: string) => {
  const resp = await instance.get(`/entities/${username}/pets/`);
  return resp.data;
};

const fetchUserPosts = async (username: string) => {
  const resp = await instance.get(`/feed/${username}/posts/`);
  return resp.data;
};

const fetchUserFollowers = async (username: string) => {
  const resp = await instance.get(`/relations/${username}/followers/`);
  return resp.data;
};

const fetchUserFollowing = async (username: string) => {
  const resp = await instance.get(`/relations/${username}/following/`);
  return resp.data;
};

const fetchNotifications = async () => {
  const resp = await instance.get("/common/notifications/");
  return resp.data;
};

const deleteProfilePhoto = async () => {
  const resp = await instance.delete("/accounts/me/change-photo/");
  return resp.data;
};

const api = {
  login,
  signup,
  logout,
  fetchPosts,
  fetchLikes,
  fetchSearchUsers,
  fetchSearchPeople,
  fetchSearchPosts,
  fetchSuggestedUsers,
  fetchUser,
  fetchUserEntities,
  fetchUserPosts,
  fetchUserFollowers,
  fetchUserFollowing,
  fetchNotifications,
  deleteProfilePhoto,
};

export default Object.freeze(api);
