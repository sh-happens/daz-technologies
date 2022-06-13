import { Tabs } from "antd";
import React from "react";
import "../../index.css";

import izzy15 from "../../images/izzy15.jpg";
import izzy16 from "../../images/izzy16.jpg";
import izzy17 from "../../images/izzy17.jpg";
import izzy18 from "../../images/izzy18.jpg";
import izzy19 from "../../images/izzy19.jpg";
import izzy20 from "../../images/izzy20.jpg";
import izzy21 from "../../images/izzy21.jpg";
import izzy22 from "../../images/izzy22.jpg";

const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

export const Accessories: React.FC = () => (
  <div className="card-container my-10">
    <Tabs defaultActiveKey="1" onChange={onChange} centered type="card">
      <TabPane tab="Стандартные аксессуары" key="1">
        <div className="flex justify-center">
          <img src={izzy15} alt="" className="h-[200px] rounded-[50px]" />
          <img src={izzy16} alt="" className="h-[200px] rounded-[50px]" />
          <img src={izzy17} alt="" className="h-[200px] rounded-[50px]" />
          <img src={izzy18} alt="" className="h-[200px] rounded-[50px]" />
        </div>
      </TabPane>
      <TabPane tab="Дополнительные аксессуары" key="2">
        <div className="flex justify-center">
          <img src={izzy19} alt="" className="h-[200px] rounded-[50px]" />
          <img src={izzy20} alt="" className="h-[200px] rounded-[50px]" />
          <img src={izzy21} alt="" className="h-[200px] rounded-[50px]" />
          <img src={izzy22} alt="" className="h-[200px] rounded-[50px]" />
        </div>
      </TabPane>
    </Tabs>
  </div>
);
