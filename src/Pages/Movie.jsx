import React, { useEffect, useState } from "react";
import CardMovie from "../Components/CardMovie";
import CardPeople from "../Components/CardPeople";
import {
  BASE_IMG,
  getMoviesURL,
  getMoviesVideosURL,
  getMoviesCreditsURL,
  getMoviesSimilarURL,
} from "../utils/const";
import { displayDate, timeConvert } from "../utils/function";
import useWindowDimensions from "../utils/useWindowDimensions";

const Movie = ({ match }) => {
  const id = match.params.id;

  const { type } = useWindowDimensions();
  const [numberMovie, setNumberMovie] = useState(5);

  const [movieData, setMovieData] = useState({});
  const [movieVideosID, setMovieVideosID] = useState("");
  const [movieCredits, setMovieCredits] = useState({});
  const [moviesSimilar, setMoviesSimilar] = useState({});

  // Fetch data with id
  useEffect(() => {
    fetch(getMoviesURL(id))
      .then((res) => res.json())
      .then((data) => setMovieData(data));

    fetch(getMoviesVideosURL(id))
      .then((res) => res.json())
      .then((data) => {
        const resultYT = data.results.filter(
          (item) => item.site === "YouTube" && item.official === true
        );
        if (resultYT.length > 0) {
          setMovieVideosID(resultYT[0].key);
        } else {
          setMovieVideosID("");
        }
      });

    fetch(getMoviesCreditsURL(id))
      .then((res) => res.json())
      .then((data) => setMovieCredits(data));

    fetch(getMoviesSimilarURL(id))
      .then((res) => res.json())
      .then((data) => setMoviesSimilar(data.results));
  }, [id]);

  // Define display number movie
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
                  <p className="date">
                    Sortie le {displayDate(movieData.release_date)}
                  </p>
                  <p className="time">Durée {timeConvert(movieData.runtime)}</p>
                  <h4 className="synopsis">Synopsis</h4>
                  <p className="overview">{movieData.overview}</p>
                </div>
                <div className="yt">
                  {movieVideosID !== "" && (
                    <>
                      <h3 className="sub-title">Bande Annonce</h3>
                      <iframe
                        width="327"
                        src={`https://www.youtube.com/embed/${movieVideosID}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </>
                  )}
                </div>
              </div>

              <h3 className="sub-title">Casting</h3>
              <div className="all-people">
                {movieCredits?.cast?.length > 0 &&
                  movieCredits.cast
                    .slice(0, 8)
                    .map((people, k) => <CardPeople {...people} key={k} />)}
                {movieCredits?.crew?.length > 0 &&
                  movieCredits.crew
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
