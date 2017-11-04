// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

import { clearCombatRounds,nextCombatRound } from '../../common/combatRounds/actions'

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';

const inlineStyles = {
  button: {
    margin: 12,
  },
  counter:{
    height: 125,
    width: 125,
    margin: 20,
    textAlign:'centered',
    display: 'inline-block',
  },
  CombatRoundPage:{
    display: 'flex',
  }
};

const Counter = ({combatRound}) => {

  return (
      <Paper style={inlineStyles.counter} zDepth={2} children={<div> `${combatRound}` </div>} />
  );
};


class CombatRoundsPage extends React.Component {
  render() {
    const { combatRound, nextCombatRound } = this.props;
    const { currentCombatRound } = combatRound;
    return (
    <Paper style={inlineStyles.CombatRoundPage} zDepth={1}  children={
        <div style={inlineStyles.CombatRoundPage}>
          <Counter combatRound={currentCombatRound}/>
          <RaisedButton
              label="Next Round"
              primary={true}
              style={inlineStyles.button}
              onClick={()=>{nextCombatRound()}}
          />
          <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Clear Combat"/>

          </IconMenu>
        </div>
    } />
    );
  }
}
export default compose(
    connect(
        (state) => ({
          combatRound: state.combatRound,

        }),
        { nextCombatRound,
          clearCombatRounds,
        },
    ),
)(CombatRoundsPage);
