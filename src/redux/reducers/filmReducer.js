import { SEARCH_MOVIE, SET_SEARCH_FILTER, ORDER_FILTER, SELECT_FILM, UNSELECT_FILM } from '../actions/types';
import * as filterMethods from '../helpers/filterMethods';

const initialState = {
  searchingFilters: [
    { name: 'title', value: 'title', active: true },
    { name: 'genres', value: 'genre', active: false }
  ],
  orderFilters: [
    {
      value: 'release date', name: 'release_date', active: false, sortingFilter: 'byDate'
    },
    {
      value: 'rating', name: 'rating', active: false, sortingFilter: 'byVote'
    }
  ],
  moviesList: [],
  limit: null,
  offset: null,
  total: null,
  selectedFilm: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        limit: action.movies.limit,
        offset: action.movies.offset,
        total: action.movies.total,
        moviesList: action.movies.data,
        orderFilters: initialState.orderFilters
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchingFilters: state.searchingFilters.map((item) => {
          if (item.name === action.filter.name) {
            return { ...item, active: true };
          }
          return { ...item, active: false };
        })
      };
    case ORDER_FILTER:
      return {
        ...state,
        moviesList: Array.from(state.moviesList)
          .sort(filterMethods[action.filter.sortingFilter]),
        orderFilters: state.orderFilters.map((item) => {
          if (item.name === action.filter.name) {
            return { ...item, active: true };
          }
          return { ...item, active: false };
        })
      };
    case SELECT_FILM:
      return {
        ...state,
        selectedFilm: action.film
      };
    case UNSELECT_FILM:
      return initialState;
    default:
      return state;
  }
};
