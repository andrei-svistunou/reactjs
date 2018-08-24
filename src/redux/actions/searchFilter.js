import { SET_SEARCH_FILTER } from './types';

const searchFilter = filter => ({ type: SET_SEARCH_FILTER, filter });

export default searchFilter;
