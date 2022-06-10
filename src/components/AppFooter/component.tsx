import { Row, Layout } from "antd";
import { FC } from "react";

export const AppFooter: FC = () => {
  const { Content, Footer } = Layout;
  return (
    <Footer>
      <Content>
        <Row justify="end" align="bottom">
          <img
            src="/images/logo-footer.png"
            alt="daz-technology"
            className="h-5"
          />
        </Row>
      </Content>
    </Footer>
  );
};
