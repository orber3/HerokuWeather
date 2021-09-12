import {
  ADD_FAV_FAIL,
  ADD_FAV_SUCCESS,
  REMOVE_FAV_FAIL,
  REMOVE_FAV_SUCCESS,
} from './Constants';

export const addFavAction = (id, keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_FAV_SUCCESS,
      payload: {
        id: id,
        keyword: keyword,
      },
    });
    localStorage.setItem(
      'favourites',
      JSON.stringify(getState().FavouriteReducer.favourites)
    );
  } catch (e) {
    dispatch({
      type: ADD_FAV_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const removeFavAction = (id, keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_FAV_SUCCESS,
      payload: id,
      keyword: keyword,
    });
    localStorage.setItem(
      'favourites',
      JSON.stringify(getState().FavouriteReducer.favourites)
    );
  } catch (e) {
    dispatch({
      type: REMOVE_FAV_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
