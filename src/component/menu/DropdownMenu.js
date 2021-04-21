import { Divider, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  return (
    <Menu style={{ width: 150 }}>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/new">New class</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/trending">Trending</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">About us</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a>Logout</a>
      </Menu.Item>
    </Menu>
  );
}
