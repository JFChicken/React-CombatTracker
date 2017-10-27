// @flow
import React from 'react'
import Paper from 'material-ui/Paper';

import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const ToDoPage = () => (
    <div>
        <Paper style={style} zDepth={1} children={
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>

        }/>

    </div>
)

export default ToDoPage
