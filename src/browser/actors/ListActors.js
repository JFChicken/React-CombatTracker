// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DropActor from 'material-ui/svg-icons/action/delete';

const inlineStyles = {

};
type ListActorsProps = {
  // flow type casting
  allActors:Array<Object>,
};

class ListActors extends React.Component {

  props: ListActorsProps;

  render() {
    const { allActors }= this.props;
    const items = allActors.map((a,i)=>
      <Card>
        <CardHeader
            title={a.characteristics.name}
            children={
              <CardActions>
                <IconButton tooltip="Drop Actor">
                  <DropActor />
                </IconButton>
              </CardActions>
            }
            actAsExpander={true}
            showExpandableButton={true}
        />

        <CardText expandable={true}>
          Initiative: {a.combat.currentInitiative}
          -
          Actor Type: {a.actorSettings.ActorType}
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
export default compose(
    connect(
        (state) => ({
         // reducers
          allActors: state.actors.all,

        }),
        {
          // actions
        },
    ),
)(ListActors);
