// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material Ui
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const inlineStyles = {
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  cardText: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-around',
  },
  card:{
    margin: '10px 5px'
  }

};
type ItemCardProps = {
  title: String,
  amount: number,
  description: String,
};

type ItemCardState= {
  canEdit:Boolean,
}

class ItemCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      canEdit: false
    };
  }
  state: ItemCardState;
  props: ItemCardProps;
  static defaultProps = {
    title: "Untitled",
    amount: 0,
    description: "Lorem Ipsum Untitled",
  };
handleUpdate = ()=>{
  this.setState(( prevState ) => ({
        canEdit: !prevState.canEdit
      }));
};
  render() {
    const {title, amount, description} =  this.props;
    const {canEdit} = this.state;
    return (
        <Card style={inlineStyles.card}>
          <CardHeader
              title={`Item: ${title}`}
              subtitle={`Amount: ${amount}`}
              actAsExpander={true}
              showExpandableButton={true}
          />
          <CardActions expandable={true} style={inlineStyles.cardActions}>
            <FlatButton label="Update" onClick={()=>{this.handleUpdate()}}/>
            <FlatButton label="Delete"/>
          </CardActions>
          <CardText expandable={true} style={inlineStyles.cardText}>
            <TextField
                disabled={!canEdit}
                hintText={`Amount of ${title}`}
                defaultValue={amount}
                floatingLabelText="Amount"
            />
            <TextField
                multiLine={true}
                rows={2}
                rowsMax={5}
                disabled={!canEdit}
                hintText="Description"
                defaultValue={description}
                floatingLabelText={`Description of ${title}`}
            />
          </CardText>
        </Card>
    );
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
)(ItemCard);
