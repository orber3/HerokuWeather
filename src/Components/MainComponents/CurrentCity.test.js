import React from 'react';
import { mount } from 'enzyme';
import { findByTestAtrr } from '../../testsUtils';
import { Box, Grid, Typography } from '@material-ui/core';
import CurrentCity from './CurrentCity';

const setUp = (props = {}) => {
  const component = mount(<CurrentCity {...props} />);
  return component;
};
describe('CurrentCity component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      data: {
        cityName: 'herolo',
        current: '32',
        color: 'red',
      },
    };
    wrapper = setUp(props);
  });

  it('should render city name', () => {
    const materialType = wrapper.find(Typography).find('p');
    const component = findByTestAtrr(materialType, 'cityName');
    expect(component.length).toBe(1);
  });
});
