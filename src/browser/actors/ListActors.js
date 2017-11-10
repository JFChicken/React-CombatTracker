// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';


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
    const items = allActors.map((a,i)=><div>
      {a.characteristics.name}
      -
      {i}
    </div>);
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
