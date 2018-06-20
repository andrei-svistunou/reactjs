import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configStore from '../redux/configureStore';
import Button from '../components/Button';
import Search from '../components/Search';


const initialState = window.REDUX_INITIAL_STATE || {};
const store = configStore(initialState);

describe('<Search />', () => {
  const Props = {
    id: 'id',
    clickHandler: jest.fn()
  };

  test('should render <Search />', () => {
    const wrapper = mount(<Provider store={store}><Search {...Props}/></Provider>);

    expect(wrapper.contains(Button)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle a child click', () => {
    const wrapper = mount(<Provider store={store}><Search {...Props} /></Provider>);
    wrapper.find(Button).at(2).simulate('click');
    expect(Props.clickHandler).toHaveBeenCalled();
  });
});

