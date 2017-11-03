// @flow
import React from 'react';
import {Switch, NavLink, Route} from 'react-router-dom';

// Pages
import NotFoundPage from './NotFoundPage';
import {HomePage} from './home/HomePage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

  render() {
    const activeStyle = {color: 'blue'};
    return (<div>

          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={NotFoundPage}/>
          </Switch>

        </div>
    );
  };
}

export default App