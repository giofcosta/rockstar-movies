import React, { useEffect, useState } from "react";
import MovieImage from "./MovieImage";
import MoviesService from "../services/MoviesService";

const Movies = (props) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (props.location.movie) {
      setMovie(props.location.movie);
    } else {
      MoviesService.getById(props.match.params.id)
        .then((response) => {
          setMovie(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MovieImage path={movie.poster_path} width="300" className="mr-5" />
      <h1>{movie.title}</h1>
      <p>
        <b>Date: </b> {movie.release_date}
        <br />
        <b>Popularity: </b> {movie.popularity}
        <br />
        <br />
        {movie.overview}
      </p>
    </div>
  );
};

export default Movies;
