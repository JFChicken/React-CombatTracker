// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Sub Components
import CombatRoundsTracker from './CombatRoundsTracker';
import ListActors from '../actors/ListActors';
import CombatRoundsInitiativeList from './CombatRoundsInitiativeList';

const inlineStyles = {};


class CombatRoundsPage extends React.Component {


  render() {

    return (
        <div>
          <CombatRoundsTracker/>
          <CombatRoundsInitiativeList/>
          {/*<ListActors/>*/}

        </div>
    );
  }
}
export default compose(
    connect(
        ( state ) => ({}),
        {},
    ),
)(CombatRoundsPage);
