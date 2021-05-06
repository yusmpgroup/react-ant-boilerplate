import React from 'react';
import { Layout } from 'antd';

import Sidebar from 'containers/Sidebar';
import Navbar from 'containers/Navbar';

const { Content, Sider } = Layout;

const Page = ({ children }) => {

  return (
    <Layout>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Navbar/>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Page;
