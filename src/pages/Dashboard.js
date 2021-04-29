import { Breadcrumb, Dropdown, Layout, Menu } from "antd";
import React from "react";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import ListClass from "./teacher/ListClass";
import CreateClass from "./teacher/CreateClass";
import DropdownMenu from "../component/menu/DropdownMenu";
import { withAuthSync } from "../utils/auth";

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="flex justify-center my-4">
          <Link to="/">
            <h2 className="text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
          </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<ContactsOutlined />}>
            <Link to="/dashboard">My class</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/dashboard/create">Create class</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <div className="w-full h-full flex items-center justify-end ">
            {/* <Dropdown overlay={} trigger={["click"]} placement="bottomLeft">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ml-0 mr-2">
                <img
                  src="/img/default-avatar.jpg"
                  className="min-w-full min-h-full flex-shrink-0"
                />
              </div>
            </Dropdown> */}
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              <Route path="/dashboard/create">
                <CreateClass />
              </Route>
              <Route path="/dashboard">
                <ListClass />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          iLearn ©2021 Created by iHelloWorld
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthSync(Dashboard);
