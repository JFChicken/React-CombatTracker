// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';


const inlineStyles = {

};
const ActorsPageProps = {

};

class ActorsPage extends React.Component {

  props: ActorsPageProps;

  render() {

    return (
        <span>Actors page</span>
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
)(ActorsPage);
