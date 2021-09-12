import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { primary, secondary } from '../../Colors';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    appbarpalette: {
      '&.MuiAppBar-colorPrimary': {
        backgroundColor: primary.backGroundColor,
      },
      '&.MuiAppBar-colorSecondary': {
        backgroundColor: secondary.backGroundColor,
      },
    },
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    lineHeight: 1.6,
    alignItems: 'center',
  },
  fav: {
    display: 'block',
    color: 'white',
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
  },
  homeIcon: {
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: primary.whiteColor,
    fontSize: '35px',
    justifyContent: 'center',
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    '&.homeIcon-heightPrimary': {
      height: '#100%',
      fontSize: 'large',
      color: 'primary',
    },
    '&.homeIcon-heightSecondary': {
      height: '#100%',
    },
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

  const ThemeReducer = useSelector((state) => state.ThemeReducer);
  const { themeState } = ThemeReducer;

  return (
    <div className={classes.root}>
      <AppBar
        color={themeState}
        classes={{
          colorPrimary: classes.appbarpalette,
          colorSecondary: classes.appbarpalette,
        }}
        position="static"
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Orber Weather Home Assignment
          </Typography>
          {/* <SearchBox /> */}
          <div className={classes.right}>
            <Link style={{ textDecoration: 'none' }} to={'/favorite'}>
              <Typography className={classes.fav} variant="h6" noWrap>
                Favourites
              </Typography>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={'/home'}>
              <IconButton>
                {/* <HomeIcon className={classes.homeIcon} /> */}
                <HomeIcon style={{ color: primary.whiteColor }} />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
