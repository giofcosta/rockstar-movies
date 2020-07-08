import axios from "axios";

const apiKey = "d4bb7c9478289c41a0e4c98e34a5caab";
const defaultLanguage = "en-US";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

const requestHandler = (request) => {
  const baseParams = `?api_key=${apiKey}&language=${defaultLanguage}`;
  if (request.url.include("?")) {
    request.url = request.url.replace("?", baseParams + "&");
  } else {
    request.url += baseParams;
  }

  return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
