// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
// Helper Functions
import shortId from 'shortid';

// Material UI
import Paper from 'material-ui/Paper';

// sub Components
import  AddItem  from './AddItem';
import  ItemList  from './ItemList';


const inlineStyles = {
  ItemsPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '5px 0px',
    margin: '15px 5px',
  },
};

type ItemsPageProps = {
};

class ItemsPage extends React.Component {

  props: ItemsPageProps;

  render() {
    const {} = this.props;
    return (
        <Paper style={inlineStyles.ItemsPage} zDepth={1} children={
          <div>
            <h1>LIST ITEMS</h1>
            <ItemList />
            <h1>ADD ITEM</h1>
            <AddItem />
          </div>
        }/>
    );
  }
}

export default compose(
    connect(
        ( state ) => ({
          // reducers

        }),
        {
          // actions
        },
    ),
)(ItemsPage);
