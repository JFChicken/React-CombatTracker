// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Material Ui
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// Form Valadation
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

// redux actions
import { editItem } from '../../common/characterItems/characterItemsActions';

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
  card: {
    margin: '10px 5px'
  }

};
type ItemCardProps = {
  id: String,
  title: String,
  amount: number,
  description: String,
  editItem: Function,
};

type ItemCardState = {
  canEdit: Boolean,
  formData: {
    title: string,
    amount: number,
    description: String,

  }
}

class ItemCard extends React.Component {

  constructor( props ) {
    super(props);
    this.state = {
      formData: {
        title: props.title,
        description: props.description,
        amount: props.amount,
      },
      canEdit: true,

    };
  }

  state: ItemCardState;
  props: ItemCardProps;

  static defaultProps = {
    title: "Untitled",
    amount: 0,
    description: "Lorem Ipsum Untitled",
  };

  componentWillReciveProps( nextProps ) {

  };

  handleUpdate = () => {
    this.setState(( prevState ) => ({
      canEdit: !prevState.canEdit
    }));
  };

  handleChangeAmount = ( event ) => {
    const { formData } = this.state;
    const amount = event.target.value;
    this.setState({

      formData: { ...formData, amount: amount }
    });
  };

  handleChangeDescription = ( event ) => {
    const { formData } = this.state;
    const description = event.target.value;
    this.setState({ formData: { ...formData, description: description } });
  };

  handleChangeTitle = ( event ) => {
    const { formData } = this.state;
    const title = event.target.value;
    this.setState({ formData: { ...formData, title: title } });
  };

  handleSubmit = () => {
    const { formData } = this.state;
    const { title, amount, description } = formData;
    const { id, editItem } = this.props;
    editItem(id, title, amount, description);

  };

  render() {
    // const { description } = this.props;
    const { canEdit, formData } = this.state;
    const { title, amount, description } = formData;

    return (
        <Card style={inlineStyles.card}>
          <CardHeader
              title={`Item: ${title}`}
              subtitle={`Amount: ${amount}`}
              actAsExpander={true}
              showExpandableButton={true}
          />
          <CardActions expandable={true} style={inlineStyles.cardActions}>
            {/*<FlatButton label="Update" onClick={() => {*/}
              {/*this.handleUpdate()*/}
            {/*}}/>*/}
            <FlatButton label="Delete"/>
          </CardActions>
          <CardText expandable={true} style={inlineStyles.cardText}>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
              <TextValidator
                  disabled={!canEdit}
                  hintText="Title"
                  value={title}
                  floatingLabelText="Title"
                  name="Title"
                  onChange={this.handleChangeTitle}
                  validators={[ 'required' ]}
                  errorMessages={[ 'this field is required' ]}
              />
              <TextValidator
                  disabled={!canEdit}
                  hintText={`Amount of ${title}`}
                  value={amount}
                  floatingLabelText="Amount"
                  name="Amount"
                  onChange={this.handleChangeAmount}
                  validators={[ 'required', 'isNumber' ]}
                  errorMessages={[ 'Ammount is required', 'Amount is not valid' ]}
              />
              <TextValidator
                  multiLine={true}
                  rows={2}
                  rowsMax={5}
                  disabled={!canEdit}
                  hintText="Description"
                  value={description}
                  floatingLabelText="Description"
                  name="Description"
                  onChange={this.handleChangeDescription}
                  validators={[ 'required' ]}
                  errorMessages={[ 'this field is required' ]}
              />


              <FlatButton disabled={!canEdit} type="submit" label="submit"/>

            </ValidatorForm>
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
          editItem
        },
    ),
)(ItemCard);
