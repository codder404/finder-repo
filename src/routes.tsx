import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Repo from './pages/Repo';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route peth="/" exact component={Dashboard} />
        <Route path="/repositories/:repo+" component={Repo} />
      </Switch>
    </Router>
  );
};

export default Routes;
