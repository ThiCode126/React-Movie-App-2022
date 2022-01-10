import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG } from "../utils/const";

const CardPeople = ({ id, name, character, profile_path, job }) => {
  return (
    <div className="card-people">
      {profile_path ? (
        <img src={BASE_IMG + profile_path} alt="profil" className="profil" />
      ) : (
        <img
          src="https://via.placeholder.com/500x750"
          alt="profil"
          className="profil"
        />
      )}

      <div className="card-body">
        <Link to={`/person/${id}`}>
          <h5 className="name-people">{name}</h5>
        </Link>
        {character && <p className="character">{character}</p>}
        {job && <p className="character">{job}</p>}
      </div>
    </div>
  );
};

export default CardPeople;
