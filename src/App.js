import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
