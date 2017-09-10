import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

import HomePage from '../HomePage';
import Vote from '../Vote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">

        </AppBar>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/vote" component={Vote} />
        </Switch>

      </div>
    );
  }
}

export default App;
