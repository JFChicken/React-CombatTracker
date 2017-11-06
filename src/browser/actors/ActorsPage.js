// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import Paper from 'material-ui/Paper';

// sub Components
import NewActor from './NewActor';

const inlineStyles = {

};
const ActorsPageProps = {

};

class ActorsPage extends React.Component {

  props: ActorsPageProps;

  render() {

    return (
        <Paper style={inlineStyles.CombatRoundPage} zDepth={1}  children={
          <NewActor/>
        }/>
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
