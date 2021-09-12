import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { currentCity } from '../../Actions/CityAction';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    fontSize: '1.3rem',

    [theme.breakpoints.down(500)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      height: '100%',
      fontSize: '1rem',
    },
    [theme.breakpoints.down(350)]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      justifyContent: 'center',
      height: '100%',
    },
  },
  title: {
    color: 'white',
  },
  text: {
    marginTop: '20px',
    color: 'white',
  },
}));

const FavCard = (props) => {
  let history = useHistory();

  const { data } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  let temperature = data.data[0].Temperature.Metric.Value;
  temperature = temperature.toFixed(0);
  const handleClick = (id, keyword) => {
    dispatch(currentCity(id, keyword));

    history.push('/city');
  };
  return (
    <Grid className={classes.root}>
      <div onClick={() => handleClick(data.id, data.keyword)}>
        <Box className={classes.title}> {data.keyword} </Box>
        <Box className={classes.text}>
          {' '}
          {temperature} <span> &#8451; </span>
        </Box>
        <Box className={classes.text}> id: {data.id} </Box>
        <Box className={classes.text}> {data.data[0].WeatherText} </Box>
      </div>
    </Grid>
  );
};

export default FavCard;
