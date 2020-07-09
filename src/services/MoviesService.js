import http from "../http-commons";

const getAll = (params) => {
  let url;

  if (params && params.search) {
    url = `/search/movie?page=1&include_adult=false&query=${params.search}`
  } else {
    url =  "/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false";
  }

  return http.get(url);
};

export default {
  getAll,
};
