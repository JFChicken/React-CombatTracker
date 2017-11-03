// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

const inlineStyles = {
  activeStyle: {
    color: 'red'
  }
};


export const NavagationLinks = ()=>{
  return(
<div>
  |
  <NavLink exact to="/" activeStyle={inlineStyles.activeStyle}>Home</NavLink>
  |
  <NavLink exact to="/combat" activeStyle={inlineStyles.activeStyle}>Combat</NavLink>
  |
</div>
  );
};