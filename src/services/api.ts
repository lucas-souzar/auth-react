import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/utils";

export const API = axios.create({
  baseURL: "https://reqres.in/api/",
});

API.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    //@ts-ignore
    config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
