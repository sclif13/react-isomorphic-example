import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menu = {

}
class Menu extends Component {
  render() {
    return (
      <ul className={menu}>
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
          <li><Link to="/four">Four</Link></li>
        </ul>
    );
  }
}

export default Menu;
