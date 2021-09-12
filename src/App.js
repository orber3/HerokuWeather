import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import FavoritePage from './Pages/FavoritePage';
import Main from './Pages/Main';
import Header from './Components/Header/Header';
import FavCityPage from './Pages/FavCityPage';

import React, { useState } from 'react';
import { CssBaseline, IconButton, Grid } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { SwapHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeAction } from './Actions/ThemeAction';

const useStyles = makeStyles((theme) => ({
  rootApp: {
    apppalette: {
      '&.MuiGrid-root-colorPrimary': {
        backgroundColor: 'red',
      },
      '&.MuiGrid-colorSecondary': {
        backgroundColor: 'grey',
      },
    },
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

  return (
    <div className={classes.rootApp}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          // className={classes.rootApp}
          color={themeState}
          classes={{
            colorPrimary: classes.apppalette,
            colorSecondary: classes.apppalette,
          }}
        >
          <Router>
            <Header />
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={() => {
                changeTheme();
              }}
            >
              <SwapHoriz />
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
