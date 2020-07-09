import http from "../http-commons";

const getAll = (params) => {
  let url;

  if (params) {
    if (params.search) {
      url = `/search/movie?page=1&include_adult=false&query=${params.search}`;
    } else {
      url =
        "/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false";
    }
    console.log(params.rating);
    if (params.rating > 0) {
      const avg = params.rating * 2;
      url += `&vote_average.gte=${avg - 2}&vote_average.lte=${avg}`;
    }
  }

  return http.get(url);
};

const getById = (id) => {
  const url = `/movie/${id}`;
  return http.get(url);
};

export default {
  getAll,
  getById,
};
