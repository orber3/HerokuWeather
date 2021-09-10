import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SearchReducer } from './Reducers/SearchReducer';
import { GetCityReducer } from './Reducers/GetCityReducer';
import { CurrentCityReducer } from './Reducers/CurrentCityReducer';

export const reducer = combineReducers({
  SearchReducer,
  GetCityReducer,
  CurrentCityReducer,
});

const initialState = {
  SearchReducer: { data: null },
  GetCityReducer: { data: '' },
  CurrentCityReducer: { id: 215854, keyword: 'Tel Aviv' },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
