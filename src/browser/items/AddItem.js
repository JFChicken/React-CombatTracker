// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const inlineStyles = {
  button: {
    margin: 12,
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:'5px 0px',
    margin: '15px 5px',
  },
};

type AddItemProps = {

};

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'item',
      actorType: 'PC',
      pageNumber: 0,
    };
  }

  props: AddItemProps;

  render() {
    const { name,actorType,pageNumber } = this.state;

    return (
        <div style={inlineStyles.page}>
          <TextField
              id="actorName"
              defaultValue={name}
          />

          <DropDownMenu  value={actorType} >
            <MenuItem value='PC' key='PC' primaryText='Player' />
            <MenuItem value='NPC' key='NPC' primaryText='Non-Player' />
          </DropDownMenu>

          <TextField
              id="pageNumber"
              defaultValue={pageNumber}
          />

          <RaisedButton
              label="ADD"
              primary={true}
              style={inlineStyles.button}
          />


        </div>
    );
  }
}
export default compose(
    connect(
        (state) => ({
          // reducers

        }),
        {
          // actions
        },
    ),
)(AddItem);

