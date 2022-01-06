export const API_KEY = "?api_key=061eaf24655991b2b90735fbf79209a2";
export const BASE_URL = "https://api.themoviedb.org/3";
export const LANG = "&language=fr-FR";
export const QUERY = "&query=";


export const DISCOVER_URL = BASE_URL + "/discover/movie" + API_KEY + LANG
export const TRENDING_URL = BASE_URL + "/trending/movie/week" + API_KEY + LANG
export const POPULAR_URL = BASE_URL + "/movie/popular" + API_KEY + LANG
export const NOW_URL = BASE_URL + "/movie/now_playing" + API_KEY + LANG
export const UPCOMING_URL = BASE_URL + "/movie/upcoming" + API_KEY + LANG


export const SEARCH_URL = BASE_URL + "/search/movie" + API_KEY + LANG + QUERY

export const BASE_IMG = "https://image.tmdb.org/t/p/w500";