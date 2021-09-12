import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FavoritePage from './Pages/FavoritePage';
import Main from './Pages/Main';
import Header from './Components/Header/Header';
import FavCityPage from './Pages/FavCityPage';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/home" component={Main} />
          <Route path="/favorite" component={FavoritePage} exact />
          <Route path="/city" component={FavCityPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
