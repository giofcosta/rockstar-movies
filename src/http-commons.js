import axios from "axios";
import config from "./config";

const defaultLanguage = "en-US";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

const requestHandler = (request) => {
  const baseParams = `?api_key=${config.apiKey}&language=${defaultLanguage}`;
  if (request.url.includes("?")) {
    request.url = request.url.replace("?", baseParams + "&");
  } else {
    request.url += baseParams;
  }

  return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
