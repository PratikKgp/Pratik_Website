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

class Page_7 extends Component {
  render() {
    return (
      <Header
        className="div_8"
        style={{ padding: "410px", backgroundColor: "#b8bcbb" }}
      >
        <Title className="my-app-contact">
          <h1>CONTACT : </h1>
        </Title>
        <Text className="my-app-info">
          <h2>
            PHONE NO. : +91-8888949303 <br />
            EMAIL ID :{" "}
            <a href="mailto:desaipratik98@gmail.com">
              <Icon type="mail" />
            </a>{" "}
            desaipratik98@gmail.com <br />
            <a href="https://mail.google.com/mail/u/0?ui=2&ik=aeaa990e10&attid=0.1&permmsgid=msg-f:1629824788399715549&th=169e4d0286b0f4dd&view=att&disp=inline&realattid=f_ju1n7cvl0">
              {"       "}CV{"   "}
            </a>
            <a href="https://www.linkedin.com/in/pratik-desai-11074412a/">
              <Icon type="linkedin" />
            </a>
            {"  "}
            <a href="https://www.facebook.com/pratik.desai.756">
              <Icon type="facebook" />
            </a>
          </h2>
        </Text>
      </Header>
    );
  }
}

export default Page_7;
