import { FC } from "react";
import { Typography } from "antd";
import { CarouselItem } from "@/components/Carousel";
import { ProductDescription } from "@/components/ProductDescription";
import { AboutCompany } from "@/components/AboutCompany";
import { Slider } from "@/components/Slider";
import { Feedback } from "@/components/Feedback";
import { Accessories } from "@/components/Accessories";
import { MapComponent } from "@/components/MapComponent";

export const Home: FC = () => {
  const { Title } = Typography;
  return (
    <>
      <CarouselItem />
      <AboutCompany />
      <Accessories />
      <ProductDescription />
      <Slider />
      <Feedback />
      <MapComponent />
    </>
  );
};
