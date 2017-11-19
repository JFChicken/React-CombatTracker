// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';
// Redux Actions
import { clearCombatRounds, nextCombatRound, setActions } from '../../common/combatRounds/actions'

// Material UI
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

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

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  props: CombatRoundsTrackerPageProps;

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const { combatRound, nextCombatRound, clearCombatRounds, setActions, nextAction } = this.props;
    const { currentCombatRound, currentAction, maxAction } = combatRound;
    return (
    <AppBar
        title={<div style={inlineStyles.combatRoundPage}>
          <Counter counter={currentCombatRound} title="Round"/>
          <Counter counter={currentAction} title={`Action(${maxAction}) `}/>
          <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={()=>{ nextCombatRound();  this.handleClose();  } }>nextCombatRound</MenuItem>
            <MenuItem onClick={()=>{ clearCombatRounds();this.handleClose();  } }>clearCombatRounds</MenuItem>
            <MenuItem onClick={()=>{ setActions(4);      this.handleClose();  } }>setActions 4</MenuItem>
            <MenuItem onClick={()=>{ setActions(5);      this.handleClose();  } }>setActions 5</MenuItem>
            <MenuItem onClick={()=>{ setActions(6);      this.handleClose();  } }>setActions 6</MenuItem>
            <MenuItem onClick={()=>{ setActions(7);      this.handleClose();  } }>setActions 7</MenuItem>
          </Drawer>
        </div>}
        onLeftIconButtonTouchTap={()=>{
          this.handleToggle();
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
