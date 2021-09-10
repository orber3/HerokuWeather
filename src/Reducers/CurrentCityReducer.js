import { CITY_FAIL, CITY_REQUEST, CITY_SUCCESS } from '../Actions/Constants';

export const CurrentCityReducer = (
  state = { loading: true, id: {}, keyword: 'Tel Aviv' },
  action
) => {
  switch (action.type) {
    case 'current_city':
      return {
        loadingCity: false,
        id: action.payload,
        keyword: action.keyword,
      };

    default:
      return state;
  }
};
