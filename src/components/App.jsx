import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import User from './users/User';
import Alert from './layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import GithubState from '../context/github/GithubState';
import AlertState from '../context/alert/AlertState';

import '../App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;