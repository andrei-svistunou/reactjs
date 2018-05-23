import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import App from '../components/App';

const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

describe('<App />', () => {
  test('should render <App />', () => {
    const app = shallow(<Provider store={store}><App/></Provider>);

    expect(toJson(app)).toMatchSnapshot();
  });
});

