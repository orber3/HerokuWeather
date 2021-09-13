import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import FavoritePage from './Pages/FavoritePage';
import Main from './Pages/Main';
import Header from './Components/Header/Header';
import FavCityPage from './Pages/FavCityPage';
import React, { useState } from 'react';
import { CssBaseline, IconButton, Grid } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeAction } from './Actions/ThemeAction';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
const useStyles = makeStyles((theme) => ({
  rootApp: {
    backgroundColor: ' rgb(186, 213, 221)',
    background:
      'linear-gradient(107deg,rgba(186, 213, 221, 1) 6%,rgba(236, 243, 245, 0.8211659663865546) 98%)',
  },
  darkRoot: {
    zIndex: '0',
    backgroundColor: 'rgb(106, 112, 113)',
    background:
      'radial-gradient(circle,rgba(106, 112, 113, 1) 1%,rgba(160, 173, 177, 1) 62%,rgba(101, 105, 106, 0.8211659663865546) 98%)',
  },
}));
const Theme = {
  palette: {
    primary: {
      main: '#3f51b5',
      backgroundColor: '#FFFFFF',
    },
    secondary: {
      main: '#424242',
      backgroundColor: '#dd2c00',
    },
  },
};

function App() {
  const dispatch = useDispatch();

  const ThemeReducer = useSelector((state) => state.ThemeReducer);
  const { themeState } = ThemeReducer;

  const [themeSelected, setThemeSelected] = useState('primary');

  const classes = useStyles();

  const theme = createTheme(Theme);

  const changeTheme = () => {
    if (themeSelected === 'primary') setThemeSelected('secondary');
    else setThemeSelected('primary');

    dispatch(ThemeAction(themeSelected));
  };
  let bodyClass;
  if (themeState === 'primary') {
    bodyClass = true;
  } else {
    bodyClass = false;
  }

  return (
    <div className={classes.rootApp}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid className={bodyClass ? classes.rootApp : classes.darkRoot}>
          <Router>
            <Header />
            <IconButton
              color="inherit"
              onClick={() => {
                changeTheme();
              }}
            >
              <SettingsBrightnessIcon fontSize="large" />
            </IconButton>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/home" component={Main} />
              <Route path="/favorite/" component={FavoritePage} />
              <Route path="/city" component={FavCityPage} exact />
            </Switch>
          </Router>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
