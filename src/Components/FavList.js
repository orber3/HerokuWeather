import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FavCard from './FavCard';
import { FavCityAction } from '../Actions/CityAction';

import { Slide } from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minHeight: '500px',
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
  paper: {
    backgroundColor: '#3f51b5',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '165px',
    whiteSpace: 'nowrap',
    width: '120px',
    [theme.breakpoints.down(470)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      // fontSize: '0.5rem',
    },
  },
}));

const FavList = ({ FavoriteData, loading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let GetFavCityReducer = useSelector((state) => state.GetFavCityReducer);
  let { FavCityError, FavData, keyword } = GetFavCityReducer;

  const GetResult = () =>
    FavoriteData.forEach((item) => {
      dispatch(FavCityAction(item.id, item.keyword));
    });

  useEffect(() => {
    GetResult();
  }, []);

  return (
    <>
      {loading ? (
        'loading'
      ) : FavCityError ? (
        <div>
          <Message variant="error" children={FavCityError} />
        </div>
      ) : (
        <div className={classes.root}>
          <Grid container className={classes.container} spacing={2}>
            {FavData
              ? FavData.map((item) => (
                  <Grid key={item.keyword} item>
                    <Slide in={true} style={{ transitionDelay: '1500ms' }}>
                      <Paper className={classes.paper}>
                        <FavCard data={item} />
                      </Paper>
                    </Slide>
                  </Grid>
                ))
              : 'loading'}
          </Grid>
        </div>
      )}
    </>
  );
};

export default FavList;
