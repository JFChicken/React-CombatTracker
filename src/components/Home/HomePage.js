// @flow
import React from 'react'
import {compose} from 'ramda';
import {connect} from 'react-redux';

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'flow',
  minHeight: 200,
};
type HomePageProps = {
  appState: object,
}

class HomePage extends React.Component {
  props: HomePageProps;

  render() {
    const {appState} = this.props;
    console.log('appState',appState);
    return (
        <div>

          <h1>
            Combat Tracker
          </h1>


        </div>
    )
  };
}

export default compose(
    connect(
        state => ({
          appState: state.appState,
        }),
        {},
    ),
)(HomePage);
