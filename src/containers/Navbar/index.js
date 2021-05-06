import React from 'react';
import { Layout } from 'antd';
import './index.scss';

const { Header } = Layout;
const prefixCls = 'navbar';

const Navbar = () => {
  return <Header style={{ background: 'white' }}></Header>;
};

export default Navbar;
