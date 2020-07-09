import React, { useState, useEffect } from "react";
import MoviesService from "../services/MoviesService";
import MovieImage from "./MovieImage";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    retrieveMovies({ search: "", rating: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retrieveMovies = (params) => {
    MoviesService.getAll(params)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchMovie = () => {
    retrieveMovies({ search: searchTitle, rating: rating });
  };

  const changeRating = (value) => {
    let newValue = 0;
    if (value !== rating) newValue = value;
    setRating(newValue);
    retrieveMovies({ search: "", rating: newValue });
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  return (
    <div className="list row">
      <div className="col-md-9">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Find your movie..."
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchMovie}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="35px"
        />
      </div>
      <div className="col-md-12">
        <div className="container">
          <div className="d-flex flex-wrap ">
            {movies &&
              movies.map((movie, index) => (
                <div className={"p-2 flex-fill"} key={index}>
                  <Link
                    to={{
                      pathname: "/movie/" + movie.id,
                      movie: movie,
                    }}
                    className="badge badge-warning"
                  >
                    <MovieImage path={movie.poster_path} title={movie.title} width="180" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
