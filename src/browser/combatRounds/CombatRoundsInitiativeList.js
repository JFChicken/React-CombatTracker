// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Helper functions
import { orderBy } from 'lodash'
import shortId from 'shortid';

// Material UI
import { Card } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const inlineStyles = {
  initiativeListPage: {
    margin: '10px 15px',
  },
  chipContainer: {
    display: 'flex',
    alignItems: 'space-around',
  },
  cardContainer: {
    margin: '15px 0px',
    padding: '10px 5px',
  },
  paperActorListContainer:{
    margin: '15px 0px',
    padding: '10px 10px',
  }
};

type CombatActorListProps = {
  sortedActors: Array<Object>,

}

const CombatActorList = ( sortedActors: CombatActorListProps ) => {
  const items = sortedActors.map(( a, i ) =>
      <Card
          style={inlineStyles.cardContainer}
          key={shortId.generate()}
      >
        <div style={inlineStyles.chipContainer}>
          <Chip style={inlineStyles.chip}>
            <span>Initiative: {a.combat.currentInitiative}</span>
          </Chip>
          <Chip style={inlineStyles.chip}>
            <span>{a.characteristics.name}</span>
          </Chip>
        </div>
      </Card>
  );
  return (items);
};

type CombatRoundInitiativeListPageProps = {
// flow type casting
  allActors: Array<Object>,
};

class CombatRoundInitiativeListPage extends React.Component {

  props: CombatRoundInitiativeListPageProps;

  render() {
    const { allActors } = this.props;
    const sortedActors = orderBy(allActors, ( o ) => {
      return o.combat.currentInitiative
    }, [ 'desc' ]);
    const listOfActors = CombatActorList(sortedActors);
    return (
        <Paper
            style={inlineStyles.paperActorListContainer}
            zDepth={1}
            children={
              <div
                  style={inlineStyles.initiativeListPage}
              >
                {listOfActors}
              </div>
            }
        />
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
)(CombatRoundInitiativeListPage);

