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

const GET_MOVIES = gql`
  query {
    inventory{
    data{
      name
      id
      description
      book
      pageNumber
    }
  }
  }
`;


const PublishedDate = ({ }) => {

  return (
      <Query query={GET_MOVIES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          const { inventory } = data;

          const invItems = inventory.data;
          const items = invItems.map(( a, i ) =>
              <div key={shortId.generate()}>

                <span>item - {a.name} - Book {a.book} - Page - {a.pageNumber}</span>

              </div>
          );

          return (
              <div>
                {items}
              </div>
          )
        }}
      </Query>
  );
};


class ItemsPage extends React.Component {

  props: ItemsPageProps;

  render() {
    const {} = this.props;
    return (
        <Paper style={inlineStyles.ItemsPage} zDepth={1} children={
          <div>
            <h1>LIST ITEMS</h1>
            <PublishedDate />
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
