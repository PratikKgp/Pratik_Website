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

class Page_3 extends Component {
  render() {
    return (
      <Header
        className="div_3"
        style={{ padding: "410px", backgroundColor: "#58b8ef" }}
      >
        <Title className="my-app-interests">
          <h2 style={{ color: "white" }}>INTERESTS</h2>
        </Title>
        <Text className="my-app-fields">
          <h3 style={{ color: "white" }}>
            Interested in working and researching in the field of :
          </h3>
        </Text>
        <ul className="my-app-list1">
          <li>
            <h2 style={{ color: "white" }}>Machine Learning </h2>
          </li>
          <li>
            <h2 style={{ color: "white" }}>Deep Learning</h2>
          </li>
          <li>
            <h2 style={{ color: "white" }}>Software Development</h2>
          </li>
        </ul>
        <ul className="my-app-list2">
          <li>
            <h2 style={{ color: "white" }}>Operations Research </h2>
          </li>
          <li>
            <h2 style={{ color: "white" }}>Supply Chain Management</h2>
          </li>
        </ul>
      </Header>
    );
  }
}

export default Page_3;
