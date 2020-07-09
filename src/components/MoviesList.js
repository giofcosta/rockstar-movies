import React, { useState, useEffect } from "react";
import MoviesService from "../services/MoviesService";
import { Link } from "react-router-dom";
import NoImageIcon from "../assets/no-image-icon.png";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retrieveMovies = () => {
    MoviesService.getAll({ search: searchTitle })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const MovieImage = (props) => {
    const { path } = props;
    const imagePath = path
      ? `https://image.tmdb.org/t/p/w300${path}`
      : NoImageIcon;
    return <img src={imagePath} width="180" alt="" />;
  };

  return (
    <div className="list row">
      <div className="col-md-12">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveMovies}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <h4>Movies List</h4>
        <div className="container">
          <div className="d-flex flex-wrap ">
            {movies &&
              movies.map((movie, index) => (
                <div className={"p-2 flex-fill"} key={index}>
                  <MovieImage path={movie.poster_path} />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Tutorial</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTutorial.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTutorial.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTutorial.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/tutorials/" + currentTutorial.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default MoviesList;
