import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilmCard from '../components/FilmCard';

describe('<FilmCard />', () => {
  const filmProps = {
    title: 'Best film',
    release_date: '1982',
    genres: ['Drama', 'Adventure'],
    poster_path: 'https://google.com/img/3',
    vote_average: 8
  };

  test('should render a FilmCard', () => {
    const filmCard = shallow(<FilmCard film={filmProps}/>);

    expect(toJson(filmCard)).toMatchSnapshot();
  });
});
