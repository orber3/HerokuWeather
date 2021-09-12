import {
  addFavAction,
  removeFavAction,
  removeFavcityAction,
} from '../../Actions/FavouriteAction';
import { useDispatch } from 'react-redux';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const useStyles = makeStyles((theme) => ({
  FavIcon: {
    fontSize: '1rem',
    color: 'red',
  },
  text: {
    paddingRight: '10px',
    [theme.breakpoints.down(460)]: {
      display: 'none',
    },
  },
}));

const FavFeatures = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleFav = (e) => {
    dispatch(addFavAction(props.id, props.city));
  };

  const handleDEl = () => {
    dispatch(removeFavAction(props.id, props.city));
    dispatch(removeFavcityAction(props.id, props.city));
    console.log(props.id);
  };

  return (
    <Grid>
      {props.isThisCityIsFav ? (
        <IconButton
          className={classes.FavIcon}
          onClick={handleDEl}
          style={{ color: props.color, fontWeight: '700' }}
        >
          <div className={classes.text}>
            {' '}
            Remove {props.city} from Favorites
          </div>
          <HighlightOffIcon />
        </IconButton>
      ) : (
        <IconButton
          className={classes.FavIcon}
          onClick={handleFav}
          aria-label="FavoriteIcon"
        >
          <div className={classes.text}>Add {props.city} to Favorites</div>
          <FavoriteIcon />
        </IconButton>
      )}
    </Grid>
  );
};

export default FavFeatures;
