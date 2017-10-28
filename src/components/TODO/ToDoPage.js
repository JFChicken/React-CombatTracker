// @flow
import React from 'react'
import Paper from 'material-ui/Paper';

import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

const ToDoPage = () => (
    <div>

            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>


    </div>
);

export default ToDoPage
