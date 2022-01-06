import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEARCH_URL } from "../utils/const";
import ListSearchMovie from "./ListSearchMovie";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 2) {
      fetch(SEARCH_URL + searchQuery)
        .then((res) => res.json())
        .then((data) => setSearchResults(data.results));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <header id="header">
      <div className="cw">
        <div className="in-header">
          <nav>
            <div>
              <Link className="link" to="/">
                Movie App 2.0
              </Link>
            </div>
            <div className="search-block">
              <input
                type="search"
                name="query"
                id="query"
                placeholder="Saisissez votre recherche"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div
                className="search-result-list"
                onClick={() => setSearchQuery("")}
              >
                {searchResults.length > 0 &&
                  searchResults
                    .slice(0, 6)
                    .map((item, k) => <ListSearchMovie item={item} key={k} />)}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
