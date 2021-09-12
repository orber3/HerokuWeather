import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FavList from '../Components/FavList';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    padding: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    minHeight: '100vh',
  },
}));

const FavoritePage = () => {
  const FavouriteReducer = useSelector((state) => state.FavouriteReducer);
  const { favourites, loading } = FavouriteReducer;

  const classes = useStyles();
  return (
    <Grid container className={classes.grid} spacing={3}>
      <FavList FavoriteData={favourites} loading={loading} />
    </Grid>
  );
};

export default FavoritePage;
