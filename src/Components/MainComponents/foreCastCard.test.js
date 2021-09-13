import React from 'react';
import { mount } from 'enzyme';
import ForeCastCard from './ForeCastCard';
import { findByTestAtrr } from '../../testsUtils';
import { Box, Grid } from '@material-ui/core';

const setUp = (props = {}) => {
  const component = mount(<ForeCastCard {...props} />);
  return component;
};
describe('ForeCastCard component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      data: {
        date: '2021-09-13T07:00:00+03:00',
        Temperature: {
          Minimum: {
            Value: 18,
            Unit: 'C',
          },
          Maximum: {
            Value: 23,
          },
        },
        Day: {
          IconPhrase: ' icon phrase',
        },
      },
    };
    wrapper = setUp(props);
  });

  it('should render the box without errors', () => {
    const materialType = wrapper.find(Box).find('div');
    const component = findByTestAtrr(materialType, 'ForeCastCard');
    expect(component.length).toBe(1);
  });

  it('should render the grid  without errors', () => {
    const materialType = wrapper.find(Grid).find('div');
    const component = findByTestAtrr(materialType, 'forecastGrid');
    expect(component.length).toBe(1);
  });

  it('should all 3 of the boxes without errors', () => {
    const materialType = wrapper.find(Box).find('div');
    expect(materialType.length).toBe(3);
  });
});
