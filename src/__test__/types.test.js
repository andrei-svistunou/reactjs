import * as types from '../redux/actions/types';
import searchFilter from '../redux/actions/searchFilter';


describe('actions searchFilter', () => {
  test('should be return right type of action', () => {
    const type = types.SET_SEARCH_FILTER;
    const filter = {
      value: 'release date',
      name: 'release_date',
      active: false,
      sortingFilter: 'byDate'
    };
    const expectedAction = {
      type,
      filter
    };

    expect(searchFilter(filter)).toEqual(expectedAction);
  });
});
