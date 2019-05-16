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

class Page_6 extends Component {
  state = {
    img1: "http://www.iem.iitkgp.ac.in/img/slider/WordArtISE.png",
    img2: "https://upload.wikimedia.org/wikipedia/en/7/73/Kshitij_Logo.png"
  };
  render() {
    return (
      <Header
        className="div_6"
        style={{ padding: "470px", backgroundColor: "#8bef98" }}
      >
        <Title className="my-app-CR">
          <h2>CURRENT RESEARCH</h2>
        </Title>
        <img className="my-app-img4" src={this.state.img1} />
        <Text className="my-app-CR1">
          <h4>
            Working on a research project to forecast the accidents occurring in
            safety analytics
            <br /> domain using machine learning models and natural language
            processing under <br />
            Prof. Jhareswar Maiti of Industrial and Systems Engineering , IIT
            Kharagpur.
          </h4>
        </Text>
        <Title className="my-app-por">
          <h2>POSITION OF RESPONSIBILITY</h2>
        </Title>
        <img className="my-app-img5" src={this.state.img2} />
        <Text className="my-app-por1">
          <h3>CORE ORGANISING TEAM HEAD: FINANCE & WEB CO-ORDINATOR</h3>
          <h4>
            Responsible to manage a total budget of 12 million for the
            conduction of Kshitij 2020, <br />
            the techno-management fest of IIT Kharagpur. Also responsible to
            co-ordinate with the <br />
            Web-Team of Kshitij for maintaining the website of{" "}
            <a href="http://www.ktj.in">Kshitij</a>.
          </h4>
        </Text>
      </Header>
    );
  }
}

export default Page_6;
