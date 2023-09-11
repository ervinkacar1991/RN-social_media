import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-staging.petigo.app/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (err) => {
    if (err.response.status === 401) {
      AsyncStorage.removeItem("token");
    }
    return Promise.reject(err);
  }
);

export default instance;
