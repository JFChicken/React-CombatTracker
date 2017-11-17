// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';
// Redux Actions
import { clearCombatRounds, nextCombatRound, setActions } from '../../common/combatRounds/actions'

// Material UI
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const inlineStyles = {
  button: {
    margin: 12,
  },
  counter: {
    minHeight: 50,
    minWidth: 50,
    margin: 5,
    padding: '0px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  combatRoundPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  combatActions: {
    marginLeft: "auto",
  }
};

type CounterProps = {
  counter: number,
  title: string,
};

const Counter = ( { counter, title }: CounterProps ) => {

  return (
            <div>
              {title} {counter}
            </div>
  );
};

type CombatRoundsTrackerPageProps = {};

class CombatRoundsTrackerPage extends React.Component {

  props: CombatRoundsTrackerPageProps;

  render() {
    const { combatRound, nextCombatRound, clearCombatRounds, setActions, nextAction } = this.props;
    const { currentCombatRound, currentAction, maxAction } = combatRound;
    return (
    <AppBar
        title={<div style={inlineStyles.combatRoundPage}>
          <Counter counter={currentCombatRound} title="Round"/>
          <Counter counter={currentAction} title="Action"/>

        </div>}
        onLeftIconButtonTouchTap={()=>{
          alert('show bar')
        }}
    />

    );
  }
}
export default compose(
    connect(
        ( state ) => ({
          combatRound: state.combatRound,
        }),
        {
          nextCombatRound,
          clearCombatRounds,
          setActions,
        },
    ),
)(CombatRoundsTrackerPage);
