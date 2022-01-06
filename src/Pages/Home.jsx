import React, { useEffect, useState } from "react";
import CardMovie from "../Components/CardMovie";
import {
  DISCOVER_URL,
  NOW_URL,
  POPULAR_URL,
  TRENDING_URL,
  UPCOMING_URL,
} from "../utils/const";
import useWindowDimensions from "../utils/useWindowDimensions";

const Home = () => {
  const { type } = useWindowDimensions();
  const [numberMovie, setNumberMovie] = useState(15);
  const [activeTab, setActiveTab] = useState(0);
  const [moviesDiscover, setMoviesDiscover] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesNow, setMoviesNow] = useState([]);
  const [moviesUpComing, setMoviesUpComing] = useState([]);

  // Fetch Data
  useEffect(() => {
    fetch(DISCOVER_URL)
      .then((res) => res.json())
      .then((data) => setMoviesDiscover(data.results));

    fetch(TRENDING_URL)
      .then((res) => res.json())
      .then((data) => setMoviesTrending(data.results));

    fetch(POPULAR_URL)
      .then((res) => res.json())
      .then((data) => setMoviesPopular(data.results));

    fetch(NOW_URL)
      .then((res) => res.json())
      .then((data) => setMoviesNow(data.results));

    fetch(UPCOMING_URL)
      .then((res) => res.json())
      .then((data) => setMoviesUpComing(data.results));
  }, []);

  useEffect(() => {
    if (type === "desktop") {
      setNumberMovie(15);
    } else if (type === "tablet") {
      setNumberMovie(16);
    } else if (type === "mobile") {
      setNumberMovie(12);
    }
  }, [type]);

  return (
    <section id="page-home">
      <div className="cw">
        <div className="in-section">
          <nav className="sub-nav">
            <div
              id="tab-0"
              className={`tab-nav ${activeTab === 0 ? "tab-active" : ""}`}
              onClick={() => setActiveTab(0)}
            >
              Découvertes
            </div>
            <div
              id="tab-1"
              className={`tab-nav ${activeTab === 1 ? "tab-active" : ""}`}
              onClick={() => setActiveTab(1)}
            >
              Tendances
            </div>
            <div
              id="tab-2"
              className={`tab-nav ${activeTab === 2 ? "tab-active" : ""}`}
              onClick={() => setActiveTab(2)}
            >
              Populaires
            </div>
            <div
              id="tab-3"
              className={`tab-nav ${activeTab === 3 ? "tab-active" : ""}`}
              onClick={() => setActiveTab(3)}
            >
              Cinéma
            </div>
            <div
              id="tab-4"
              className={`tab-nav ${activeTab === 4 ? "tab-active" : ""}`}
              onClick={() => setActiveTab(4)}
            >
              A venir
            </div>
          </nav>
          <div className="all-movies">
            {activeTab === 0 &&
              moviesDiscover.length > 0 &&
              moviesDiscover
                .slice(0, numberMovie)
                .map((movie, k) => <CardMovie {...movie} key={k} />)}
            {activeTab === 1 &&
              moviesTrending.length > 0 &&
              moviesTrending
                .slice(0, numberMovie)
                .map((movie, k) => <CardMovie {...movie} key={k} />)}
            {activeTab === 2 &&
              moviesPopular.length > 0 &&
              moviesPopular
                .slice(0, numberMovie)
                .map((movie, k) => <CardMovie {...movie} key={k} />)}
            {activeTab === 3 &&
              moviesNow.length > 0 &&
              moviesNow
                .slice(0, numberMovie)
                .map((movie, k) => <CardMovie {...movie} key={k} />)}
            {activeTab === 4 &&
              moviesUpComing.length > 0 &&
              moviesUpComing
                .slice(0, numberMovie)
                .map((movie, k) => <CardMovie {...movie} key={k} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
