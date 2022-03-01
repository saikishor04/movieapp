import React from "react";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const Movie = ({ title, vote_average, poster_path, overview }) => {
  const setVoteClass = (vote) => {
    return vote >= 8 ? "green" : vote >= 6 ? "orange" : "red";
  };

  return (
    <div className="movie">
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
