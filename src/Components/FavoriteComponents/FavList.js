import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FavCard from './FavCard';
import { FavCityAction } from '../../Actions/CityAction';

import { Slide } from '@material-ui/core';
import Message from '../Message';
import CircularProgerss from '@material-ui/core/CircularProgress';
import { secondary } from '../../Colors';
import LineChart from './LineChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gridGap: theme.spacing(10),
    [theme.breakpoints.down(650)]: {
      gridGap: theme.spacing(5),
    },
  },
  darkPaper: {
    backgroundColor: secondary.backGroundColor,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '165px',
    whiteSpace: 'nowrap',
    width: '180px',
    [theme.breakpoints.down(470)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      // fontSize: '0.5rem',
    },
  },
  paper: {
    backgroundColor: '#3f51b5',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '165px',
    whiteSpace: 'nowrap',
    width: '180px',
    [theme.breakpoints.down(470)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      // fontSize: '0.5rem',
    },
  },
}));

const FavList = ({ FavoriteData, loading, themeState }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let GetFavCityReducer = useSelector((state) => state.GetFavCityReducer);
  let { FavCityError, FavData } = GetFavCityReducer;
  console.log(FavData);
  const GetResult = () =>
    FavoriteData.forEach((item) => {
      dispatch(FavCityAction(item.id, item.keyword));
    });

  useEffect(() => {
    GetResult();
  }, []);

  let paperClass;

  if (themeState === 'primary') {
    paperClass = true;
  } else {
    paperClass = false;
  }
  return (
    <>
      {loading ? (
        <CircularProgerss />
      ) : FavCityError ? (
        <div>
          <Message variant="error" children={FavCityError} />
        </div>
      ) : (
        <div className={classes.root}>
          <Grid container className={classes.container} spacing={2}>
            {/* <LineChart data={FavData} /> */}
            {FavData ? (
              FavData.map((item) => (
                <Grid key={item.id} item>
                  <Slide in={true} style={{ transitionDelay: '1500ms' }}>
                    <Paper
                      id={item.data[0].HasPrecipitation}
                      className={paperClass ? classes.paper : classes.darkPaper}
                    >
                      <FavCard data={item} />
                    </Paper>
                  </Slide>
                </Grid>
              ))
            ) : (
              <CircularProgerss />
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

export default FavList;
