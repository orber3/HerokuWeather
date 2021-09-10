import { CITY_FAIL, CITY_REQUEST, CITY_SUCCESS } from './Constants';
import axios from 'axios';

export const CityAction =
  (id = 215854, keyword = 'Tel Aviv') =>
  async (dispatch, getState) => {
    let base_url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    try {
      dispatch({
        type: CITY_REQUEST,
      });

      let apikey = 'GhPptTxeKa5rZke3nS3wUtmQ5wiTeFcJ';

      const { data } = await axios.get(`${base_url}${id}?apikey=${apikey}`);

      dispatch({
        type: CITY_SUCCESS,
        payload: data,
        keyword: keyword,
      });
    } catch (e) {
      dispatch({
        type: CITY_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };

export const currentCity = (id, keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'current_city',
      payload: id,
      keyword: keyword,
    });
  } catch (e) {
    dispatch({
      type: CITY_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
