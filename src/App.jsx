import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Champions from './components/champions.component';
import Home from './components/home.component';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/">
            Home
          </Link>
          <Link to="/champions">
            Champions
          </Link>
        </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/champions">
              <Champions />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
