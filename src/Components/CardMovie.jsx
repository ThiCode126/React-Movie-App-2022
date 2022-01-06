import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG } from "../utils/const";

const CardMovie = ({ id, title, poster_path, vote_average }) => {
  return (
    <div className="card-movie">
      <Link to={`/movie/${id}`} title={title}>
        {poster_path ? (
          <img src={BASE_IMG + poster_path} alt="poster" className="poster" />
        ) : (
          <img
            src="https://via.placeholder.com/500x750"
            alt="poster"
            className="poster"
          />
        )}

        <div className="card-body">
          <div className="block-title">
            <h5 className="title-movie">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
