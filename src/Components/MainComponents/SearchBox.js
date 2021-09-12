import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentCity } from '../../Actions/CityAction';
import { SearchAction } from '../../Actions/SearchAction';
import Message from '../Message';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&:invalid': {
      border: 'red solid 2px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30vh',
      '&:focus': {
        width: '35vh',
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1.6',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    border: '2px groove rgba(28,110,164,0.15)',
    // borderRadius: '40px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  autocomplete: {
    backgroundColor: '#fff',
    padding: '2px 0',
    // listsstyle
    minWidth: '160px',
    position: 'absolute',
    top: '100%',
    left: '0',
    border: '1px solid #b6c1ce',
    borderRadius: '2px',
    margin: '0',
    boxSizing: 'border-box',
    maxHeight: '75px',
    overflowY: 'auto',
    zIndex: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  autoItem: {
    boxSizing: 'border-box',
    margin: 0.6,
  },
  button: {
    outline: 'none',
    backgroundColor: 'none',
    color: 'inherit',
    cursor: 'pointer',
    // outline: 'inherit',
    border: 'none',
    '&:hover': {
      background: '#78858B',
    },
  },
  input: {
    '&:invalid': {
      border: 'red solid 2px',
    },
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState();
  const [visibile, setVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    // handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    rules: { required: true },
  });
  const SearchReducer = useSelector((state) => state.SearchReducer);
  const { SearchError, data } = SearchReducer;

  const dispatchSearch = useCallback(() => {
    if (keyword) {
      dispatch(SearchAction(keyword));
      setVisible(true);
    }
  }, [keyword]);

  useEffect(() => {
    dispatchSearch();
  }, [keyword, dispatchSearch]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = (e) => {
    setKeyword(e);

    dispatch(currentCity(data[0].Key, e));
    setKeyword(null);
    setVisible(false);
  };

  return (
    <div className={classes.search}>
      {SearchError ? <Message variant="error" children={SearchError} /> : ''}
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <Controller
          name={'search'}
          control={control}
          render={({ search }) => (
            <InputBase
              {...search}
              placeholder="Search for a city..."
              value={keyword}
              name="search"
              autoComplete="off"
              inputProps={{
                className: classes.input,
                // pattern: '/^[a-zA-Z]+$/',
              }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              {...register('search', {
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only English letters is allowed',
                },
              })}
              onChange={handleChange}
            />
          )}
        />
      </form>

      {data && data.length && data.length > 0 && visibile === true ? (
        <ul className={classes.autocomplete}>
          {data.map((item, index) => (
            <p key={item.key} className={classes.autoItem}>
              <button
                className={classes.button}
                onClick={() => handleClick(item.LocalizedName)}
                type="submit"
                key={index}
              >
                {item.LocalizedName}
              </button>
            </p>
          ))}
        </ul>
      ) : (
        ''
      )}
      <ErrorMessage errors={errors} name="search" />
    </div>
  );
};

export default SearchBox;
