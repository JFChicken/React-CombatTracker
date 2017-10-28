// @flow
import React from 'react'

// redux
import { connect } from 'react-redux';

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'flow',
};

class NewCharacterPage extends React.Component {

  state: {
    textFieldValue:string,
  };
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: ''
    };
  }


  handleTextFieldChange = (e) => {
    this.setState({
      textFieldValue: e
    });
  };

  render(){
    const { addTodo } = this.props;
    return (
        <div>
          <TextField
              name="NewCharacter"
              value={this.state.textFieldValue}
              onChange={
                event => this.handleTextFieldChange(event.target.value)
              } />
          <RaisedButton label="Add Character" primary={true} style={style} onClick={
            ()=>{
              if (!this.state.textFieldValue.trim()) {
                return
              }
              this.setState({
                textFieldValue: ''
              });
            }

          } />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: id => {
      dispatch(addTodo(id))
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCharacterPage);

