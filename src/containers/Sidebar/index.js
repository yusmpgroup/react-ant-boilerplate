import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
const { Item } = Menu;

import options from './options';

const Sidebar = () => {
  return (
    <Menu theme="dark" mode="inline">
      {options.map(({ name, icon, path }) => (
        <Item key={path} icon={icon}>
          <NavLink to={path}>{name}</NavLink>
        </Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
