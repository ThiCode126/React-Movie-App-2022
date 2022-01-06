import React, { useEffect, useState } from "react";
import CardMovie from "../Components/CardMovie";
import CardPeople from "../Components/CardPeople";
import { API_KEY, BASE_IMG, BASE_URL, LANG } from "../utils/const";
import useWindowDimensions from "../utils/useWindowDimensions";

const Movie = ({ match }) => {
  const id = match.params.id;

  const { type } = useWindowDimensions();
  const [numberMovie, setNumberMovie] = useState(5);

  const [movieData, setMovieData] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const [moviesSimilar, setMoviesSimilar] = useState({});

  useEffect(() => {
    const urlToFetch = BASE_URL + "/movie/" + id + API_KEY + LANG;
    const urlToFetchCredits =
      BASE_URL + "/movie/" + id + "/credits" + API_KEY + LANG;
    const urlToFetchSimilar =
      BASE_URL + "/movie/" + id + "/similar" + API_KEY + LANG;
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => setMovieData(data));

    fetch(urlToFetchCredits)
      .then((res) => res.json())
      .then((data) => setMovieCredits(data));

    fetch(urlToFetchSimilar)
      .then((res) => res.json())
      .then((data) => setMoviesSimilar(data.results));
  }, [id]);

  useEffect(() => {
    if (type === "desktop") {
      setNumberMovie(5);
    } else if (type === "tablet") {
      setNumberMovie(4);
    } else if (type === "mobile") {
      setNumberMovie(3);
    }
  }, [type]);

  return (
    <section id="page-movie">
      <div className="cw">
        <div className="in-section">
          {movieData.title ? (
            <>
              <div className="movie-header">
                <h1 className="movie-title">{movieData.title}</h1>
                <div className="genres">
                  {movieData.genres.length > 0 &&
                    movieData.genres.map((item, k) => (
                      <span key={k} className="genre">
                        {item.name}
                      </span>
                    ))}
                </div>
              </div>
              <div className="block-movie">
                <img
                  src={BASE_IMG + movieData.poster_path}
                  alt="poster"
                  className="poster"
                />
                <div className="data-movie">
                  <p className="date">{movieData.release_date}</p>
                  <p className="overview">{movieData.overview}</p>
                </div>
              </div>

              <h3 className="sub-title">Casting</h3>
              <div className="all-people">
                {movieCredits?.cast?.length > 0 &&
                  movieCredits.cast
                    .slice(0, 8)
                    .map((people, k) => <CardPeople {...people} key={k} />)}
              </div>
              <h3 className="sub-title">Similaires</h3>
              <div className="all-movies">
                {moviesSimilar.length > 0 &&
                  moviesSimilar
                    .slice(0, numberMovie)
                    .map((movie, k) => <CardMovie {...movie} key={k} />)}
              </div>
            </>
          ) : (
            <h3>Loading ...</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movie;
