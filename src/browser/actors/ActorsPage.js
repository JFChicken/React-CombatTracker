// @flow
import React from 'react';
import {compose} from 'ramda';
import {connect} from 'react-redux';

// Material UI
import Paper from 'material-ui/Paper';

// sub Components
import NewActor from './NewActor';
import  ListActors  from './ListActors';
const inlineStyles = {};
type ActorsPageProps = {

};

class ActorsPage extends React.Component {

  props: ActorsPageProps;

  render() {
    const {  } = this.props;
    return (
        <Paper style={inlineStyles.CombatRoundPage} zDepth={1} children={
          <div>
          <NewActor/>
          <ListActors/>
          </div>
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
