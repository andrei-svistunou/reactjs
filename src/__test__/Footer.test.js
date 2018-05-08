import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  test('should render <Footer />', () => {
    const footer = shallow(<Footer />);

    expect(footer).toMatchSnapshot();
  });
});
