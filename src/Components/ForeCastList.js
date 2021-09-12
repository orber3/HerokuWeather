import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ForeCastCard from './ForeCastCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minHeight: '500px',
    width: '100%',
    display: 'flex',
    padding: '12px',
    paddingRight: '30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gridGap: theme.spacing(8),

    [theme.breakpoints.down(650)]: {
      gridGap: theme.spacing(5),
    },
  },
  paper: {
    backgroundColor: '#3f51b5',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '100px',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
    maxWidth: '140px',
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.down(470)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
}));

const ForeCastList = ({ data, loading }) => {
  const classes = useStyles();

  return (
    <>
      {loading ? (
        'loading'
      ) : (
        <div className={classes.root}>
          <Grid container className={classes.container} spacing={2}>
            {data.map((item) => (
              <Grid key={item.date} item>
                <Paper className={classes.paper}>
                  <ForeCastCard data={item} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default ForeCastList;
