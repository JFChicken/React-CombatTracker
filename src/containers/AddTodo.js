import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Validation, fieldValidatorCore } from "react-validation-framework";
import validator from "validator";

const style = {
    margin: 12,
};


// const AddTodo = ({ dispatch }) => {
class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textFieldValue: ''};
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
            <Validation
                group="myGroup1"
                validators={[
                    {
                        validator: (val) => !validator.isEmpty(val),
                        errorMessage: "Cannot be left empty"
                    }, {
                        validator: (val) => validator.isAlphanumeric(val),
                        errorMessage: "Should be a numeric number"
                    },
                ]}>
            <TextField
                name="todo"
                value={this.state.textFieldValue}
                onChange={
                event => this.handleTextFieldChange(event.target.value)
            } />
            </Validation>
                <RaisedButton label="Add Todo" primary={true} style={style} onClick={
                    ()=>{
                        let checkFieldTestResult = fieldValidatorCore.checkGroup("myGroup1");
                        if (checkFieldTestResult.isValid){
                            console.log("All fields with Gropu prop value as myGroup1 is valid");
                            addTodo(this.state.textFieldValue.trim());
                            this.setState({
                                textFieldValue: ''
                            });
                        } else {
                            console.log("Some of fields with group as \"myGroup1\" are invalid");
                            console.log("Field which are invalid are ", checkFieldTestResult.inValidComponents);
                            console.log("Fields which are valid are ", checkFieldTestResult.validComponents);
                        }
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
)(AddTodo);