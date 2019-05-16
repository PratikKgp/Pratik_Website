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

class Page_1 extends Component {
  state = {
    img:
      "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21768103_914460795358508_7647321231876306730_n.jpg?_nc_cat=106&_nc_ht=scontent-sea1-1.xx&oh=540d340576c4620cf9373727f35c12cc&oe=5D772FB5"
  };
  render() {
    return (
      <Header
        className="div_1"
        style={{
          padding: "410px",
          backgroundColor: "#eddabd"
        }}
      >
        <Title className="my-app-name" level={1} style={{ color: "white" }}>
          PRATIK DESAI
        </Title>
        <img className="my-app-img" src={this.state.img} />
        <Text className="my-app-1">
          <h1 style={{ color: "white" }}>Welcome to my Webpage</h1>
        </Text>
        <Text className="my-app-2">
          <h2 style={{ color: "white" }}>
            Please browse through the various pages from the Navigation menu to
            know more about me
          </h2>
        </Text>
        <Text className="my-app-3">
          <h1 style={{ color: "white" }}>IT'S NICE TO MEET YOU</h1>
        </Text>
      </Header>
    );
  }
}

export default Page_1;
