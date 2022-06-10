import { Button, Layout, Row } from "antd";
import React from "react";
import { AppHeaderProps } from "./props";
import {
  FacebookOutlined,
  InstagramOutlined,
  SketchOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export const AppHeader: React.FC<AppHeaderProps> = ({ isUserLoggedIn }) => {
  const { Header } = Layout;

  return (
    <Header
      className="flex flex-row justify-between items-center p-5"
      style={{ background: "#36cfc9" }}
    >
      <Row>
        <Button type="text" ghost>
          Some Logo
          <SketchOutlined style={{ fontSize: "30px", color: "#fff" }} />
        </Button>
      </Row>
      <Row>
        <div>
          <a
            href="https://www.facebook.com/aurafamily1/"
            target="_blank"
            className="mx-1"
          >
            <FacebookOutlined style={{ fontSize: "30px", color: "#fff" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCpuLMKVcKWQDTbfMwE9tppg"
            target="_blank"
            className="mx-1"
          >
            <YoutubeOutlined style={{ fontSize: "30px", color: "#fff" }} />
          </a>
          <a
            href="https://www.instagram.com/aurafamily/"
            target="_blank"
            className="mx-1"
          >
            <InstagramOutlined style={{ fontSize: "30px", color: "#fff" }} />
          </a>
        </div>
      </Row>
      {/* <Row justify="end">
        <Button ghost>{isUserLoggedIn ? "Logout" : "Login"}</Button>
      </Row> */}
    </Header>
  );
};
