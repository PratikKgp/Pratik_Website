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

class Page_5 extends Component {
  render() {
    return (
      <Header
        className="div_5"
        style={{ padding: "420px", backgroundColor: "#e9b3f9" }}
      >
        <Title className="my-app-skills">
          <h2>SOFTWARE SKILLS</h2>
        </Title>

        <ul className="my-app-list5">
          <li>
            <h2>C </h2>
          </li>
          <li>
            <h2>Python</h2>
          </li>
          <li>
            <h2>R</h2>
          </li>
          <li>
            <h2>Javascript</h2>
          </li>
          <li>
            <h2>HTML</h2>
          </li>
          <li>
            <h2>CSS</h2>
          </li>
        </ul>
        <ul className="my-app-list6">
          <li>
            <h2>IBM Cplex </h2>
          </li>
          <li>
            <h2>MATLAB </h2>
          </li>
          <li>
            <h2>SAS</h2>
          </li>
          <li>
            <h2>SolidWorks</h2>
          </li>
          <li>
            <h2>Ansys</h2>
          </li>
        </ul>
      </Header>
    );
  }
}

export default Page_5;
