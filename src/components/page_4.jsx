import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
//import Breadcrumb from "antd/lib/breadcrumb";
import Icon from "antd/lib/icon";
//import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import MenuItem from "antd/lib/menu/MenuItem";
//import { Row, Col } from "antd/lib/grid";

const { Text } = Typography;
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Page_4 extends Component {
  render() {
    return (
      <Header
        className="div_4"
        style={{ padding: "410px", backgroundColor: "#f7f779" }}
      >
        <Title className="my-app-coursework">
          <h2 style={{ color: "black" }}>RELATED COURSEWORK</h2>
        </Title>
        <ul className="my-app-list3">
          <li>
            <h2 style={{ color: "black" }}>Programming and Data Structures </h2>
          </li>
          <li>
            <h2 style={{ color: "black" }}>
              Design and Analysis of Algorithms{" "}
            </h2>
          </li>
          <li>
            <h2 style={{ color: "black" }}>Operations Research</h2>
          </li>
        </ul>
        <ul className="my-app-list4">
          <li>
            <h2 style={{ color: "black" }}>Probability and Statistics </h2>
          </li>
          <li>
            <h2 style={{ color: "black" }}>
              Neural Networks and Deep Learning - Andrew Ng{" "}
            </h2>
          </li>
          <li>
            <h2 style={{ color: "black" }}>Machine Learning - Andrew Ng</h2>
          </li>
        </ul>
      </Header>
    );
  }
}

export default Page_4;
