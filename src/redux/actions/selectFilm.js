import { SELECT_FILM } from './types';

const selectFilm = film => ({ type: SELECT_FILM, film });

export default selectFilm;
