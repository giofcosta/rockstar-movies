import http from "../http-commons";

const getAll = () => {
  return http.get(
    "/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false"
  );
};


export default {
    getAll
}