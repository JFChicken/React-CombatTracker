// @flow
import React from 'react'

// redux
import { connect } from 'react-redux';
import { addCharacter } from '../../actions'

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
      nameValue: '',
      initiateValue: 1,
    };
  }
createDropdown = ()=>{
    const items = [];
    for (let i = 1; i < 21; i++ ) {
        items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }
    return items;
};

  handleChange = (event, index, initiateValue) => this.setState({initiateValue});

  handleTextFieldChange = (e) => {
    this.setState({
        nameValue: e
    });
  };

  render(){
    const { addCharacter } = this.props;
    return (
        <div>
          <TextField
              name="NewCharacter"
              value={this.state.nameValue}
              onChange={
                event => this.handleTextFieldChange(event.target.value)
              } />
          Initiate:
          <DropDownMenu maxHeight={300} value={this.state.initiateValue} onChange={this.handleChange}>
              {this.createDropdown()}
          </DropDownMenu>
          <RaisedButton label="Add Character" primary={true} style={style} onClick={
            ()=>{
              if (!this.state.nameValue.trim()) {
                return
              }
                addCharacter(this.state.nameValue,this.state.initiateValue);
              this.setState({
                  nameValue: ''
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
      addCharacter: id => {
      dispatch(addCharacter(id))
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCharacterPage);

