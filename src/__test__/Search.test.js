import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../components/Button';
import Search from '../components/Search';
import Filter from '../components/Filter';

describe('<Search />', () => {
  const Props = {
    id: 'id',
    clickHandler: jest.fn()
  };

  test('should render <Search />', () => {
    const wrapper = mount(<Search {...Props}/>);

    expect(wrapper.contains(Button)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle a child click', () => {
    const wrapper = mount(<Search {...Props} />);
    wrapper.find(Button).at(2).simulate('click');
    expect(Props.clickHandler).toHaveBeenCalled();
  });

  it('should submit search', () => {
    const spy = jest.spyOn(Search.prototype, 'onSubmit');
    const search = mount(<Search {...Props}/>);
    search.simulate('submit');
    expect(Search.prototype.onSubmit).toHaveBeenCalled();
    expect(toJson(search)).toMatchSnapshot();
  });

  it('should provide onchange handler', () => {
    const spy = jest.spyOn(Search.prototype, 'onChangeInput');
    const search = mount(<Search {...Props}/>);
    search.find('.search__field').simulate('change');
    expect(Search.prototype.onChangeInput).toHaveBeenCalled();
    expect(toJson(search)).toMatchSnapshot();
  });

  it('should provide onchange handler', () => {
    const spy = jest.spyOn(Search.prototype, 'onSearchBy');
    const search = mount(<Search {...Props}/>);
    search.find(Filter).find(Button).at(0).simulate('click');
    expect(Search.prototype.onSearchBy).toHaveBeenCalled();
    expect(toJson(search)).toMatchSnapshot();
  });
});

