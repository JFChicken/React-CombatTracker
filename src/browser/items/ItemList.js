// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';

// data access to DL with GraphQL
import { graphql } from 'react-apollo';

// GraphQL
import { GetItemsList } from './ItemQueries';

// Helper Functions
import shortId from 'shortid';

const inlineStyles = {
  chip: {
    margin: 4,
  },
  chipContainer:{
    display: 'flex',
    alignItems: 'space-around',
  }
};
type ItemListProps = {
  // flow type casting
   data:object,
};

class ItemList extends React.Component {

  props: ItemListProps;

  render() {
    const {itemList,data } = this.props;
     console.log(data);
    if (data.loading) {
      return(<div>Loading</div>);
    }

    if (data.error) {
      return(<div>Error</div>);
    }

    if (!data.loading) {
      const {inventory } = data;
      const itemList  = inventory.data;
      console.log(inventory);
    const items = itemList.map(( a, i ) =>
        <Card key={shortId.generate()}>
          <CardHeader
              title={a.name}
              actAsExpander={true}
              showExpandableButton={true}
          />

          <CardText expandable={true}>
            <div style={inlineStyles.chipContainer}>
              <span>{a.description}</span>
            </div>
            <div style={inlineStyles.chipContainer}>
              <Chip style={inlineStyles.chip}>
                <span>Book: {a.book} Page: {a.pageNumber}</span>
              </Chip>
            </div>
          </CardText>
        </Card>
    );
    return (
        <div>
          {items}
        </div>
    );


    }
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
    graphql(GetItemsList, {
      options: {
        //variables: GetFormFieldsVariables,
      },

      props: ({ data }) => ({
        data,
      }),
    }),
)(ItemList);
