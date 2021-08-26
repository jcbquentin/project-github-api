import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <Menu>
    <Menu.Item
      as={NavLink}
      to="/"
      exact
    >
      Recherche
    </Menu.Item>
    <Menu.Item
      as={NavLink}
      to="/faq"
      exact
    >
      FAQ
    </Menu.Item>
  </Menu>
);

export default Nav;
