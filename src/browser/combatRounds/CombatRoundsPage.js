// @flow
import React from 'react';

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

const Counter = (combatRound:Number) => {

  const counter = <span>00</span>;
  return (
      <Paper style={inlineStyles.counter} zDepth={2} children={counter} />
  );
};


class CombatRoundsPage extends React.Component {
  render() {
    return (
    <Paper style={inlineStyles.CombatRoundPage} zDepth={1}  children={
        <div style={inlineStyles.CombatRoundPage}>
          <Counter combatRound={0}/>
          <RaisedButton label="Next Round" primary={true} style={inlineStyles.button}/>
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

export default CombatRoundsPage;
