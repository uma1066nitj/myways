import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/create-food'>Create Food</NavLink>
        </li>
        <li>
          <NavLink to='/food-list'>Food List</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
