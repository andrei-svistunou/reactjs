import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error from '../components/Error';

beforeEach(() => {
  jest.spyOn(console, 'error');
  global.console.error.mockImplementation(() => {});
});

afterEach(() => {
  global.console.error.mockRestore();
});

function ProblemChild() {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>; // eslint-disable-line
}

describe('<Error />', () => {
  it('should catch errors with componentDidCatch', () => {
    const spy = jest.spyOn(Error.prototype, 'componentDidCatch');
    const err = mount(<Error><ProblemChild /></Error>);
    expect(Error.prototype.componentDidCatch).toHaveBeenCalled();
    expect(toJson(err)).toMatchSnapshot();
  });
});
