// @flow
import React from 'react';
import {NavLink} from 'react-router-dom';

// Material Ui
import FlatButton from 'material-ui/FlatButton';


const inlineStyles = {
  activeStyle: {
    color: 'red'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
};


export const NavagationLinks = () => {
  return (
      <div style={inlineStyles.nav}>


        <NavLink exact to="/" activeStyle={inlineStyles.activeStyle}><FlatButton label="Home"/></NavLink>

        <NavLink exact to="/items" activeStyle={inlineStyles.activeStyle}><FlatButton label="Items"/></NavLink>


        <NavLink exact to="/combat" activeStyle={inlineStyles.activeStyle}><FlatButton label="Combat"/></NavLink>


        <NavLink exact to="/actors" activeStyle={inlineStyles.activeStyle}> <FlatButton label="Players"/></NavLink>

      </div>
  );
};