import { Box, Card, CardHeader, Grid, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '270px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    fontSize: '1.5rem',

    [theme.breakpoints.down(500)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      height: '100%',
    },
    [theme.breakpoints.down(350)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      alignItems: 'center',
      height: '100%',
      // width: '175px',
    },
  },
  title: {
    color: 'white',
  },
  text: {
    marginTop: '24px',
    color: 'white',
  },
}));

const ForeCastCard = (data) => {
  function dayOfWeekAsString(dayIndex) {
    return (
      [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ][dayIndex] || ''
    );
  }

  const classes = useStyles();
  let date = new Date(data.data.Date);
  let index = date.getDay();
  let day = dayOfWeekAsString(index);
  let temperature =
    (data.data.Temperature.Minimum.Value +
      data.data.Temperature.Maximum.Value) /
    2;
  temperature = temperature.toFixed(0);
  let unit = data.data.Temperature.Minimum.Unit;
  let unitText;
  if (unit == 'C') {
    unitText = <span> &#8451; </span>;
  } else {
    unitText = <span>&#8457;</span>;
  }
  return (
    <Grow in={true}>
      <Grid className={classes.root}>
        <Box className={classes.title}>{day}</Box>
        <Box className={classes.text}>
          {' '}
          {temperature} {unitText}
        </Box>
      </Grid>
    </Grow>
  );
};

export default ForeCastCard;
