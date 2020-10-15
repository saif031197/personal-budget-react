import React from 'react';

import {
    Link
  } from "react-router-dom";



function Menu() {
  return (
    <nav className="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><a rel="canonical" aria-label="Google Home" href="https://google.com">Google</a></li>
            <li><a rel="canonical" aria-label="Github" href="https://github.com/saif031197/personal-budget-react">Github</a></li>
        </ul>
    </nav>
  );
}

export default Menu;
