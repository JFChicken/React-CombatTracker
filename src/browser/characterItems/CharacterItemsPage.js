// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

// Redux Actions
import { nextAction } from '../../common/combatRounds/actions'


// sub Pages

import ItemCard from './ItemCard';


const inlineStyles = {

};



type CharacterItemsPageProps = {
  equipment:Array<Object>,

};

class CharacterItemsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  props: CharacterItemsPageProps;

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
const { equipment } = this.props;
    return (
        <div>
        <AppBar
            title={<div style={inlineStyles.combatRoundPage}>
              <span> Items </span>
              <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
              >
                <MenuItem onClick={()=>{ this.handleClose();  } }>action</MenuItem>

              </Drawer>
            </div>}
            onLeftIconButtonTouchTap={()=>{
              this.handleToggle();
            }}
        />

          {equipment.map(( object, index ) => {
            return (
                <ItemCard
                    key={index}
                    id={object.id}
                    title={object.title}
                    amount={object.amount }
                    description={object.description}
                />
            )})
          }
        </div>
    );
  }
}
export default compose(
    connect(
        (state) => ({
         // reducers
          equipment: state.items.equipment,
        }),
        {
          // actions
        },
    ),
)(CharacterItemsPage);

