// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material UI
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';

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
type ListActorsProps = {
  // flow type casting
  allActors: Array<Object>,
};

class ListActors extends React.Component {

  props: ListActorsProps;

  render() {
    const { allActors } = this.props;
    const items = allActors.map(( a, i ) =>
        <Card key={shortId.generate()}>
          <CardHeader
              title={a.characteristics.name}
              actAsExpander={true}
              showExpandableButton={true}
          />

          <CardText expandable={true}>
            <div style={inlineStyles.chipContainer}>
              <Chip style={inlineStyles.chip}>
              <span>Actor Type: {a.actorSettings.ActorType}</span>
              </Chip>
            </div>
            <div style={inlineStyles.chipContainer}>
              <Chip style={inlineStyles.chip}>
              <span>Initiative: {a.combat.currentInitiative}</span>
              </Chip>
              <Chip style={inlineStyles.chip}>
              <span>maxActions: {a.combat.maxActions}</span>
              </Chip>
              <Chip style={inlineStyles.chip}>
              <span>currentActions: {a.combat.currentActions}</span>
              </Chip>
            </div>
            <div style={inlineStyles.chipContainer}>
              <Chip style={inlineStyles.chip}>
              <span>name: {a.characteristics.name}</span>
              </Chip>
              <Chip style={inlineStyles.chip}>
              <span>HitPoints: {a.characteristics.hitPoints}</span>
              </Chip>
              <Chip style={inlineStyles.chip}>
              <span>resistanceCapacity: {a.characteristics.resistanceCapacity}</span>
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
export default compose(
    connect(
        ( state ) => ({
          // reducers
          allActors: state.actors.all,

        }),
        {
          // actions
        },
    ),
)(ListActors);
