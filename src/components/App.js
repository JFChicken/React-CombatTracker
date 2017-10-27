// @flow
import React from 'react'
import Paper from 'material-ui/Paper';
import {Switch, NavLink, Route} from 'react-router-dom';

// Pages
import HomePage from './Home/HomePage';
import ToDoPage from './TODO/ToDoPage';
import NotFoundPage from './NotFoundPage';

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',

};

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

    render() {
        const activeStyle = {color: 'blue'};
        return (<div>
            <Paper style={style} zDepth={1} children={
                <div>
                    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                    {' | '}
                    <NavLink exact to="/ToDo" activeStyle={activeStyle}>Todo</NavLink>
                    {' | '}
                    <NavLink to="/addCharacter" activeStyle={activeStyle}>add Character</NavLink>
                </div>
            }/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/ToDo" component={ToDoPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                {/*<Paper style={style} zDepth={1} children={*/}
                {/*<ToDoPage/>*/}
                {/*}/>*/}

            </div>
        );
    };
}

export default App