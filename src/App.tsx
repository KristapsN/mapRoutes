import { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/home';
import { fetchMapData } from './store/action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMapData());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
