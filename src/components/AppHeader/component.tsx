import { Button, Layout, Row } from "antd";
import React from "react";
import { AppHeaderProps } from "./props";

export const AppHeader: React.FC<AppHeaderProps> = ({ isUserLoggedIn }) => {
  const { Header } = Layout;

  return (
    <Header className="flex flex-row justify-between items-center p-5 bg-primary">
      <Row>
        <Button type="text" ghost>
          Link
        </Button>
      </Row>
      <Row justify="end">
        <Button ghost>{isUserLoggedIn ? "Logout" : "Login"}</Button>
      </Row>
    </Header>
  );
};
