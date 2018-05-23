import { SEARCH_MOVIE } from './types';

const getMovies = movies => ({ type: SEARCH_MOVIE, movies });

export default getMovies;
