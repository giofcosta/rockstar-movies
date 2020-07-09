import React from "react";
import NoImageIcon from "../assets/no-image-icon.png";

const MovieImage = (props) => {
  const { path } = props;
  const imagePath = path
    ? `https://image.tmdb.org/t/p/w300${path}`
    : NoImageIcon;
  return <img src={imagePath} alt="" align="left" {...props} />;
};

export default MovieImage;
