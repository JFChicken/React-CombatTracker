import React from 'react'
import Paper from 'material-ui/Paper';


import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CombatCharacter from '../components/CombatCharacter'
const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const App = () => (
    <div>
        <Paper style={style} zDepth={1} children={
<div>
    <AddTodo />
    <VisibleTodoList />
    <CombatCharacter/>
    <Footer />
</div>

        }/>

    </div>
)

export default App