import { CITY_FAIL, CITY_REQUEST, CITY_SUCCESS } from '../Actions/Constants';

export const CurrentCityReducer = (
  state = { loading: true, id: '', keyword: '' },
  action
) => {
  switch (action.type) {
    case 'current_city':
      return {
        loadingCity: false,
        id: action.payload,
        city: action.keyword,
      };

    default:
      return state;
  }
};
