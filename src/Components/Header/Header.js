import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  right: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexGrow: 1,
      lineHeight: 1.6,
      alignItems: 'center',
    },
  },
  fav: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'white',
      paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    },
  },
  homeIcon: {
    // padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '35px',
    justifyContent: 'center',
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
  },
  search: {
    position: 'relative',

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(11),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Orber Weather Home Assignment
          </Typography>
          {/* <SearchBox /> */}
          <div className={classes.right}>
            <Link style={{ textDecoration: 'none' }} to={'/fav'}>
              <Typography className={classes.fav} variant="h6" noWrap>
                Favourite
              </Typography>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={'/home'}>
              <HomeIcon className={classes.homeIcon} />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
