// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import validator from "validator";

const style = {
    margin: 12,
};

type state ={
    textFieldValue: string,
}

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