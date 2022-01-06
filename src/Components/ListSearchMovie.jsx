import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG } from "../utils/const";

const ListSearchMovie = ({ item }) => {
  const { id, poster_path, title, release_date } = item;
  return (
    <Link to={`/movie/${id}`} title={title}>
      <div className="search-result-item">
        {poster_path ? (
          <img src={BASE_IMG + poster_path} alt="poster" className="poster" />
        ) : (
          <img
            src="https://via.placeholder.com/80x120"
            alt="poster"
            className="poster"
          />
        )}
        <div className="title">
          <h4>{title}</h4>
          <h6 className="year">{release_date}</h6>
        </div>
      </div>
    </Link>
  );
};

export default ListSearchMovie;
