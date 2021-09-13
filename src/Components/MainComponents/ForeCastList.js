import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ForeCastCard from './ForeCastCard';
import { primary, secondary } from '../../Colors';
import CircularProgerss from '@material-ui/core/CircularProgress';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    padding: '12px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gridGap: theme.spacing(8),

    [theme.breakpoints.down(650)]: {
      gridGap: theme.spacing(5),
    },
  },
  gridItem: {
    appbarpalette: {
      '&.MuiPaper-elevation1': {
        backgroundColor: primary.backGroundColor,
      },
      '&.MuiPaper-root': {
        backgroundColor: secondary.backGroundColor,
      },
    },
  },
  darkPaper: {
    backgroundColor: secondary.backGroundColor,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '100px',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    minWidth: '140px',
    width: '100%',
    [theme.breakpoints.down(470)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
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
    overflow: 'hidden',
    minWidth: '140px',
    width: '100%',
    [theme.breakpoints.down(470)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
}));

const ForeCastList = ({ data, loading, themeState }) => {
  const classes = useStyles();
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
      ) : (
        <div className={classes.root}>
          <Grid container className={classes.container} spacing={2}>
            {data.map((item) => (
              <Grid key={item.date} className={classes.gridItem} item>
                <Grow in={true} style={{ transitionDelay: '75ms' }}>
                  <Paper
                    key={item.date}
                    className={paperClass ? classes.paper : classes.darkPaper}
                    id={item.Day.HasPrecipitation.toString()}
                    color={themeState}
                  >
                    <ForeCastCard data={item} />
                  </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default ForeCastList;
