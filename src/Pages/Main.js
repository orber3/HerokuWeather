import { Grid, makeStyles } from '@material-ui/core';
import Header from '../Components/Header/Header';
import SearchBox from '../Components/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import CurrentCity from '../Components/Header/CurrentCity';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    flexGrow: 1,
  },
  favBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '3rem',
  },
  upper: {
    display: 'flex',
    padding: '3rem',
    alignItems: 'center',
  },
}));

const Main = () => {
  const classes = useStyles();

  // const GetCityReducer = useSelector((state) => state.GetCityReducer);
  // const { loading, data, keyword } = GetCityReducer;

  const CurrentCityReducer = useSelector((state) => state.CurrentCityReducer);
  const { loading, id, keyword } = CurrentCityReducer;

  return (
    <div>
      {/*  main grid */}
      <Grid container className={classes.grid} spacing={3}>
        <Grid item>
          <Header />
        </Grid>
        {/* container for upper components */}
        <Grid Container className={classes.upper}>
          <Grid item md={4}>
            {' '}
            {/* list of relevant card */}
            {/* <CurrentCity
              cityName={keyword}
              current={data[0].Temperature.Metric.Value}
            /> */}
          </Grid>
          {/* //search box */}
          <Grid item md={4}>
            <SearchBox />
          </Grid>

          {/* add to fav grid item */}
          <Grid item md={4} className={classes.favBox}>
            add to fav upper right
            {/* what is the weather now and which city is it?   */}
          </Grid>
        </Grid>
        <Grid item md={12}>
          {/*component that calls list of cards   */} list of cards
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
