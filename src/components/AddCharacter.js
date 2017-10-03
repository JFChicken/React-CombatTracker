// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import shortId from 'shortid'; // this may be needed latter when i need to add in keys

import { connect } from 'react-redux'
import { addCharacter } from '../actions'

const style = {
    margin: 12,
};

const items = [];
for (let i = 1; i < 21; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`Initiative ${i}`} />);
}

const characterActions = [];
for (let i = 1; i < 21; i++ ) {
    characterActions.push(<MenuItem value={i} key={i} primaryText={`Actions ${i}`} />);
}

// const CombatCharacter = ({ dispatch }) => {
class AddCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textFieldValue: '',
            initiativeValue:10,
            maxActionsValue:4,
        };
    }

    handleMaxActionsValueValueChange = (event, index, maxActionsValue) => this.setState({maxActionsValue});
    handleInitiativeValueChange = (event, index, initiativeValue) => this.setState({initiativeValue});

    handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e
        });
    };

    render(){
        const { addCharacter } = this.props;
        const {textFieldValue,initiativeValue,maxActionsValue} = this.state;
        return (
            <div>

                <TextField name="characterName" value={textFieldValue} onChange={
                    event => this.handleTextFieldChange(event.target.value)
                } />
                <DropDownMenu maxHeight={300} value={initiativeValue} onChange={this.handleInitiativeValueChange}>
                    {items}
                </DropDownMenu>
                <DropDownMenu maxHeight={300} value={maxActionsValue} onChange={this.handleMaxActionsValueValueChange}>
                    {characterActions}
                </DropDownMenu>
                <RaisedButton label="Add Character" primary={true} style={style} onClick={
                    ()=>{
                        if (!textFieldValue.trim()) {
                            return
                        }
                        addCharacter(textFieldValue,initiativeValue,maxActionsValue);
                        this.setState({
                            textFieldValue: '',
                            initiativeValue:10,
                            maxActionsValue:4,
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
        addCharacter: (textFieldValue,initiativeValue,maxActionsValue) => {
            dispatch(addCharacter(textFieldValue,initiativeValue,maxActionsValue))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCharacter);
