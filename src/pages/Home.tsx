import { FC } from "react";
import { Typography } from "antd";
import { CarouselItem } from "@/components/Carousel";
import { ProductDescription } from "@/components/ProductDescription";
import { AboutCompany } from "@/components/AboutCompany";
import { Slider } from "@/components/Slider";
import { Feedback } from "@/components/Feedback";

export const Home: FC = () => {
  const { Title } = Typography;
  return (
    <>
      <CarouselItem />
      <AboutCompany />
      <ProductDescription />
      <Slider />
      <Feedback />
    </>
  );
};
