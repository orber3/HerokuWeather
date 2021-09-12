import {
  Box,
  colors,
  FormControlLabel,
  Grid,
  makeStyles,
  Switch,
  Typography,
} from '@material-ui/core';
import SearchBox from '../Components/MainComponents/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import CurrentCity from '../Components/MainComponents/CurrentCity';
import { useEffect, useState } from 'react';
import { CityAction, currentCity } from '../Actions/CityAction';
import { ForeCastAction } from '../Actions/ForeCastAction';
import ForeCastList from '../Components/MainComponents/ForeCastList';
import FavFeatures from '../Components/MainComponents/FavFeatures';
import Message from '../Components/Message';
import Clouds from '../clouds';
import { GeoAction } from '../Actions/GeopositionAction';
import CircularProgress from '@material-ui/core/CircularProgress';
import { primary } from '../Colors';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 'fit-content',
    justifyContent: 'center',
    borderWidth: '3px',
    borderStyle: 'groove',
    borderColor: 'rgba(2,7,10,0.79)',

    overflow: 'hidden',
    [theme.breakpoints.down(700)]: {
      borderStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  boxpalette: {
    '&.MuiBox-root-colorPrimary': {
      borderColor: 'black',
    },
    '&.MuiBox-root-colorSecondary': {
      backgroundColor: 'white',
    },
  },
  favBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem',
    [theme.breakpoints.down(700)]: {
      marginLeft: 0,
      marginBottom: '0',
    },
  },
  upper: {
    display: 'flex',
    padding: '3rem',
    justifyContent: 'space-between',

    [theme.breakpoints.down(700)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  currentCity: {
    marginLeft: '4rem',
    [theme.breakpoints.down(700)]: {
      marginLeft: '0',
    },
  },
  clouds: {
    [theme.breakpoints.down(700)]: {
      display: 'none',
    },
  },
  switch: {
    marginLeft: '30px',
    width: 'fit-content',
    padding: 0,
    [theme.breakpoints.down(700)]: {
      marginLeft: '0',
    },
  },
  headline: {
    paddingBottom: '10px',
    textAlign: 'center',
  },
}));

const Main = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const ThemeReducer = useSelector((state) => state.ThemeReducer);
  const { themeState } = ThemeReducer;

  const classes = useStyles();
  const dispatch = useDispatch();

  const GetCityReducer = useSelector((state) => state.GetCityReducer);
  const { getCityError, data, keyword } = GetCityReducer;

  const CurrentCityReducer = useSelector((state) => state.CurrentCityReducer);
  const { loading, id, city } = CurrentCityReducer;

  const ForeCastReducer = useSelector((state) => state.ForeCastReducer);
  const { ForecastError, foreData, loadingforeCast } = ForeCastReducer;

  const FavouriteReducer = useSelector((state) => state.FavouriteReducer);
  const { favourites } = FavouriteReducer;

  const GeoReducer = useSelector((state) => state.GeoReducer);
  const { geoData, loadingGeo } = GeoReducer;

  const [metric, setMetric] = useState(true);
  let isThisCityIsFav = false;

  if (favourites.some((item) => item.id === id)) {
    isThisCityIsFav = true;
  }
  useEffect(() => {
    if (geoData) dispatch(currentCity(geoData.Key, geoData.LocalizedName));
  }, [geoData]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      if (long && lat) dispatch(GeoAction(lat, long));
    });
  }, [lat, long]);

  useEffect(() => {
    dispatch(CityAction(id, city));
    dispatch(ForeCastAction(id, city, metric));
  }, [id, CurrentCityReducer]);

  useEffect(() => {
    dispatch(ForeCastAction(id, city, metric));
  }, [metric]);
  let color;
  themeState === 'primary' ? (color = primary.BlueColor) : (color = 'black');
  return (
    <div>
      {getCityError ? (
        <Message variant="error" children={getCityError} />
      ) : ForecastError ? (
        <Message variant="error" children={ForecastError} />
      ) : (
        ''
      )}

      {/*  main grid */}

      <Grid container className={classes.grid} spacing={3}>
        <Grid className={classes.clouds}>
          <Clouds />
        </Grid>

        <Grid item md={6}>
          <SearchBox />
        </Grid>
        <Box
          className={classes.box}
          color={themeState}
          classes={{
            colorPrimary: classes.box.boxpalette,
            colorSecondary: classes.box.boxpalette,
          }}
        >
          {/* container for upper components */}
          <Grid container className={classes.upper}>
            <Grid className={classes.currentCity} style={{}} item md={4}>
              {data && data.length > 0 ? (
                <CurrentCity
                  cityName={city}
                  current={data[0].Temperature.Metric.Value}
                  color={color}
                />
              ) : (
                <CircularProgress />
              )}
            </Grid>

            {/* add to fav grid item */}

            <Grid item md={6} className={classes.favBox}>
              <FavFeatures
                id={id}
                city={city}
                isThisCityIsFav={isThisCityIsFav}
                color={color}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            className={classes.switch}
            style={{}}
            control={
              <Switch
                checked={metric}
                onChange={() => setMetric(!metric)}
                name="metric"
                color={themeState == 'primary' ? 'primary' : 'black'}
              />
            }
            label={metric ? <span> &#8451; </span> : <span>&#8457;</span>}
          />
          <Grid
            item
            md={12}
            style={{
              marginTop: '3rem',
              gridGap: '6',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {/*component that calls list of cards   */}
            {!loadingforeCast && foreData ? (
              <div>
                <Box className={classes.headline}>
                  {' '}
                  <Typography style={{ color: color, fontWeight: '700' }}>
                    {foreData.Headline.Text}{' '}
                  </Typography>
                </Box>
                <ForeCastList
                  data={foreData.DailyForecasts}
                  loading={loadingforeCast}
                  themeState={themeState}
                />
              </div>
            ) : ForecastError ? (
              <Message variant="error" children={ForecastError} />
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Main;
