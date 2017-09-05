import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import shortId from 'shortid'; // this may be needed latter when i need to add in keys

import { connect } from 'react-redux'
import { addTodo } from '../actions'

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
    return (
        <div>

            <TextField name="todo" value={this.state.textFieldValue} onChange={
                event => this.handleTextFieldChange(event.target.value)
            } />

                <RaisedButton label="Add Todo" primary={true} style={style} onClick={
                    ()=>{
                        console.log("this.state.textFieldValue",this.state.textFieldValue);
                        if (!this.state.textFieldValue.trim()) {
                            return
                        }
                        addTodo(this.state.textFieldValue);

                    }

                } />


        </div>
    );
    }
}

export default connect()(AddTodo);