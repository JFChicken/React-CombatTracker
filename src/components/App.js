// @flow
import React from 'react'
import Paper from 'material-ui/Paper';
import {Switch, NavLink, Route} from 'react-router-dom';

// Pages
import HomePage from './Home/HomePage';
import ToDoPage from './TODO/ToDoPage';
import NewCharacterPage from './NewCharacter/NewCharacterPage';
import NotFoundPage from './NotFoundPage';

const inlineStyles = {
  navPaper: {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',
  },
  pagePaper: {
    margin: 20,
    textAlign: 'center',
    display: 'flow',
    minHeight: 200,

  }

}

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

  render() {
    const activeStyle = {color: 'blue'};
    return (<div>
          <Paper style={inlineStyles.navPaper} zDepth={1} children={
            <div>
              <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
              {' | '}
              <NavLink exact to="/ToDo" activeStyle={activeStyle}>Todo</NavLink>
              {' | '}
              <NavLink to="/NewCharacter" activeStyle={activeStyle}>New Characters</NavLink>
            </div>
          }/>
          <Paper style={inlineStyles.pagePaper} zDepth={1} children={
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/ToDo" component={ToDoPage}/>
              <Route exact path="/NewCharacter" component={NewCharacterPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          }/>
        </div>
    );
  };
}

export default App