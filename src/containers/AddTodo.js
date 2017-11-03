// @flow
import React from 'react'
import { compose } from 'ramda';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { addTodo } from '../actions'
import validator from "validator";

const style = {
    margin: 12,
};

type props={

}
type state ={
    textFieldValue: string,
}

class AddTodo extends React.Component {

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
                name="todo"
                value={this.state.textFieldValue}
                onChange={
                event => this.handleTextFieldChange(event.target.value)
            } />
                <RaisedButton label="Add Todo" primary={true} style={style} onClick={
                    ()=>{
                        if (!this.state.textFieldValue.trim()) {
                            return
                        }
                        addTodo(this.state.textFieldValue);
                        this.setState({
                            textFieldValue: ''
                        });
                    }

                } />
        </div>
    );
    }
}

export default compose(
    connect(
        (state: State) => ({
        }),
        { addTodo },
    ),
)(AddTodo);
