// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Redux Actions
import { nextAction } from '../../common/combatRounds/actions'

// Helper functions
import shortId from 'shortid';

// Material UI
import Chip from 'material-ui/Chip';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const inlineStyles = {
  button: {
    margin: 12,
  },
  initiativeListPage: {
    margin: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipContainer: {
    display: 'flex',
    alignItems: 'space-around',
  },
  cardContainer: {
    margin: '15px 0px',
    padding: '10px 5px',
  },
};

type CombatRoundInitiativeListPageProps = {
// flow type casting
  allActors: Array<Object>,
  nextAction: Function,
};

class CombatRoundInitiativeListPage extends React.Component {

  props: CombatRoundInitiativeListPageProps;
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    const { allActors } = this.props;
    const totalPlayers = allActors.length - 1 ;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= totalPlayers,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions( step,totalPlayers ) {
    const { stepIndex } = this.state;
    return (
        <div style={{ margin: '12px 0' }}>
          <RaisedButton
              label={stepIndex === totalPlayers ? 'Finish' : 'Next'}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onClick={this.handleNext}
              style={{ marginRight: 12 }}
          />
          {step > 0 && (
              <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  onClick={this.handlePrev}
              />
          )}
        </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;
    const { allActors, nextAction } = this.props;

    return (
        <div style={inlineStyles.initiativeListPage}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            {allActors.map(( a, i ) => {
              const totalPlayers = allActors.length - 1 ;
              return (
                  <Step key={shortId.generate()}>
                    <StepLabel>
                      <Chip style={inlineStyles.chip}>
                        <span>{a.characteristics.name}</span>
                      </Chip>
                    </StepLabel>
                    <StepContent>
                      <div style={inlineStyles.chipContainer}>
                        <Chip style={inlineStyles.chip}>
                          <span>Initiative: {a.combat.currentInitiative} </span>
                        </Chip>
                        <Chip style={inlineStyles.chip}>
                          <span>Total Actions: {a.combat.maxActions}</span>
                        </Chip>
                      </div>
                      {this.renderStepActions(i,totalPlayers)}
                    </StepContent>
                  </Step>
              )
            })
            }
          </Stepper>
          {finished && (
              <RaisedButton
                  label="Next Action"
                  primary={true}
                  style={inlineStyles.button}
                  onClick={() => {
                    this.setState({stepIndex: 0, finished: false});
                    nextAction();
                  }}
              />
          )}
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
          nextAction
        },
    ),
)(CombatRoundInitiativeListPage);

