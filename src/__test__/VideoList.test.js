import React from 'react';
import { mount } from 'enzyme';
import VideoList from '../components/VideoList';
import VideoItem from '../components/VideoItem';

describe('<VideoList />', () => {
  const Props = {
    videoList: [{
      title: 'Video list',
      release_date: '1990-23-02',
      genres: ['Drama', 'Adventure'],
      poster_path: 'https://path.com/poster/2',
      id: 3
    }],
    chooseFilm: jest.fn()
  };

  test('should render <VideoList />', () => {
    const videoList = mount(<VideoList {...Props}/>);

    expect(videoList.contains(VideoItem)).toBe(true);
    expect(videoList).toMatchSnapshot();
  });

  it('should handle a child click', () => {
    const wrapper = mount(<VideoList {...Props} />);
    wrapper.find(VideoItem).simulate('click');
    expect(Props.chooseFilm).toHaveBeenCalled();
  });
});

