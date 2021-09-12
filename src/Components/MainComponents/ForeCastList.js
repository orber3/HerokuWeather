import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ForeCastCard from './ForeCastCard';
import { primary, secondary } from '../../Colors';
import CircularProgerss from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minHeight: '500px',
    width: '100%',
    display: 'flex',
    padding: '12px',
    // paddingRight: '30px',
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
    momo: {
      '&.momo': {
        color: 'red',
      },
    },
    appbarpalette: {
      '&.MuiPaper-elevation3': {
        backgroundColor: primary.backGroundColor,
      },
      '&.MuiPaper-elevation3': {
        backgroundColor: secondary.backGroundColor,
      },
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

  return (
    <>
      {loading ? (
        <CircularProgerss />
      ) : (
        <div className={classes.root}>
          <Grid container className={classes.container} spacing={2}>
            {data.map((item) => (
              <Grid key={item.date} className={classes.gridItem} item>
                <Paper
                  key={item.date}
                  className={classes.paper}
                  id={item.Day.HasPrecipitation.toString()}
                  color={themeState}
                  classes={{
                    colorPrimary: classes.appbarpalette,
                    colorSecondary: classes.appbarpalette,
                    // momo: 'momo',
                  }}
                >
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
