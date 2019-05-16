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

class Page_2 extends Component {
  state = {
    img1:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/440px-IIT_Kharagpur_Logo.svg.png",
    img2:
      "http://www.albertanativenews.com/wp-content/uploads/2018/07/alberta-.png"
  };
  render() {
    return (
      <Header
        className="div_2"
        style={{ padding: "410px", backgroundColor: "#ea8a5d" }}
      >
        <Title className="my-app-education">
          <h2 style={{ color: "white" }}>EDUCATION & INTERNSHIP</h2>
        </Title>
        <img className="my-app-img2" src={this.state.img1} />
        <Text className="my-app-4">
          <h3 style={{ color: "white" }}>
            INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR
          </h3>
        </Text>
        <Text className="my-app-5">
          <h4 style={{ color: "white" }}>
            Major: Industrial and Systems Engineering (2017-22)
          </h4>
        </Text>
        <Text className="my-app-6">
          <h4 style={{ color: "white" }}>Minor: Mathematics and Computing</h4>
        </Text>
        <img className="my-app-img3" src={this.state.img2} />
        <Text className="my-app-7">
          <h4 style={{ color: "white" }}>
            Currently pursuing a Research Internship at University of Alberta,
            Canada under the <br />
            Department of Computing Science
          </h4>
        </Text>
      </Header>
    );
  }
}

export default Page_2;
