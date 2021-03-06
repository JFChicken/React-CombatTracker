// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import { NavagationLinks } from './NavagationLinks';
import NotFoundPage from './NotFoundPage';
import { HomePage } from './home/HomePage';
import CombatRoundsPage from './combatRounds/CombatRoundsPage';
import ActorsPage from './actors/ActorsPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

  render() {

    return (<div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/combat" component={CombatRoundsPage}/>
            <Route exact path="/actors" component={ActorsPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
          <NavagationLinks />
        </div>
    );
  };
}

export default App