import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CityAction } from '../Actions/CityAction';
import { SearchAction } from '../Actions/SearchAction';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',

    alignItems: 'start',
    lineHeight: '1.6',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(11),
      width: 'auto',
    },
  },
  autocomplete: {
    backgroundColor: '#fff',
    padding: '2px 0',
    // listsstyle
    minWidth: '160px',
    position: 'absolute',
    top: '100%',
    left: '0',
    border: '1px solid #b6c1ce',
    borderRadius: '2px',
    margin: '0',
    boxSizing: 'border-box',
    maxHeight: '75px',
    overflowY: 'auto',
    zIndex: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  autoItem: {
    boxSizing: 'border-box',
    margin: 0.6,
  },
  button: {
    outline: 'none',
    backgroundColor: 'none',
    color: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
    border: 'none',
    '&:hover': {
      background: '#78858B',
    },
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState();
  const [visibile, setVisible] = useState(false);
  const dispatch = useDispatch();

  const SearchReducer = useSelector((state) => state.SearchReducer);
  const { loading, data } = SearchReducer;

  const dispatchSearch = useCallback(() => {
    setTimeout(function () {
      // dispatch(SearchAction(keyword));
      console.log('search');
    }, 1500);
    setVisible(true);
  }, []);

  useEffect(() => {
    dispatchSearch();
  }, [keyword, dispatchSearch]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = (e) => {
    setKeyword(e);

    dispatch(CityAction(data[0].Key, e));
    setVisible(false);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search for city..."
        onChange={handleChange}
        value={keyword}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />

      {data && data.length && data.length > 0 && visibile === true ? (
        <ul className={classes.autocomplete}>
          {data.map((item, index) => (
            <p key={item.key} className={classes.autoItem}>
              <button
                className={classes.button}
                onClick={() =>
                  handleClick(item.AdministrativeArea.LocalizedName)
                }
                key={index}
              >
                {item.AdministrativeArea.LocalizedName}
              </button>
            </p>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default SearchBox;

// const dummyinfo = {
//   LocalObservationDateTime:"2021-09-10T09:46:00+03:00",
// EpochTime:1631256360,
// WeatherText:"Partly sunny",
// WeatherIcon:3,
// HasPrecipitation:false,
// PrecipitationType:null,
// IsDayTime:true,
// Value:28.9,
// Unit:"C",
// UnitType:17,
// Value:84,
// Unit:"F",
// UnitType:18,
// MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
// Link:"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
// }
