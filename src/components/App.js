// @flow
import React from 'react'
import Paper from 'material-ui/Paper';
import {Switch, NavLink, Route} from 'react-router-dom';

import ToDoPage from './TODO/ToDoPage';
import NotFoundPage from './NotFoundPage';

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

    render() {
        const activeStyle = {color: 'blue'};
        return (<div>
                <div>
                    <NavLink exact to="/" activeStyle={activeStyle}>Todo</NavLink>
                    {' | '}
                </div>


                <Switch>
                    <Route exact path="/" component={ToDoPage}/>
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