import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-staging.petigo.app/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//@TODO: Add token to headers with axios interceptors on request!!

export default instance;
