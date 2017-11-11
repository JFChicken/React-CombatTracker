// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Sub Components
import CombatRoundsTracker from './CombatRoundsTracker';

const inlineStyles = {};


class CombatRoundsPage extends React.Component {


  render() {

    return (
        <CombatRoundsTracker/>
    );
  }
}
export default compose(
    connect(
        ( state ) => ({}),
        {},
    ),
)(CombatRoundsPage);
