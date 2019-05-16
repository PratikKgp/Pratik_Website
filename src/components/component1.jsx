import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
//import Breadcrumb from "antd/lib/breadcrumb";
import Icon from "antd/lib/icon";
//import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import MenuItem from "antd/lib/menu/MenuItem";
//import { Row, Col } from "antd/lib/grid";
import Page_1 from "./page_1";
import Page_2 from "./page_2";
import Page_3 from "./page_3";
import Page_4 from "./page_4";
import Page_5 from "./page_5";
import Page_6 from "./page_6";
import Page_7 from "./page_7";

class Counter extends Component {
  render() {
    return (
      <div
        id="7"
        className="div_background"
        style={{ backgroundColor: "aqua" }}
      >
        <div>
          <Menu mode="horizontal" className="myapp-Menu">
            <Menu.Item className="myapp-Menu1">
              <a href="#1">HOME</a>
            </Menu.Item>
            <Menu.Item className="myapp-Menu2">
              <a href="#2">EDUCATION & INTERNSHIP</a>
            </Menu.Item>
            <Menu.Item className="myapp-Menu3">
              <a href="#3">INTERESTS</a>
            </Menu.Item>
            <Menu.Item className="myapp-Menu4">
              <a href="#4">RELATED COURSEWORK</a>
            </Menu.Item>
            <Menu.Item className="myapp-Menu5">
              <a href="#5">SOFTWARE SKILLS</a>
            </Menu.Item>
            <Menu.Item className="myapp-Menu6">
              <a href="#6">CURRENT RESEARCH AND POR</a>
            </Menu.Item>
            <Menu.Item className="myapp-Menu7">
              <a href="#8">CONTACT</a>
            </Menu.Item>
          </Menu>
        </div>
        <div id="1">
          <Page_1 />
        </div>
        <div id="2">
          <Page_2 />
        </div>
        <div id="3">
          <Page_3 />
        </div>
        <div id="4">
          <Page_4 />
        </div>
        <div id="5">
          <Page_5 />
        </div>
        <div id="6">
          <Page_6 />
        </div>
        <div id="8">
          <Page_7 />
        </div>
      </div>
    );
  }
}

export default Counter;
