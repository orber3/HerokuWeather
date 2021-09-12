import { API, SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS } from './Constants';
import axios from 'axios';
const dummyinfo = {
  LocalObservationDateTime: '2021-09-10T09:46:00+03:00',
  EpochTime: 1631256360,
  WeatherText: 'Partly sunny',
  WeatherIcon: 3,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: true,
  Value: 28.9,
  Unit: 'C',
  AdministrativeArea: { LocalizedName: 'new york' },
  UnitType: 17,
  Value: 84,
  Unit: 'F',
  UnitType: 18,
  MobileLink:
    'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
};

export const SearchAction = (q) => async (dispatch, getState) => {
  console.log(q);
  let base_url =
    'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  try {
    dispatch({
      type: SEARCH_REQUEST,
    });

    let apikey = API;
    console.log(q);
    const { data } = await axios.get(`${base_url}?apikey=${apikey}&q=${q}`);
    // const data = dummyinfo;
    dispatch({
      type: SEARCH_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
