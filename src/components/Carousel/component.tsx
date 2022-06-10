import { Carousel } from "antd";
import { FC } from "react";
import { CarouselProps } from "./props";
import image1 from "../../images/images1.jpg";
import image2 from "../../images/images2.jpg";
import image3 from "../../images/images3.jpg";

export const CarouselItem: FC<CarouselProps> = ({ carouselItems }) => {
  return (
    <Carousel autoplay={true} dots={true}>
      <div>
        <h3 className="h-96 text-white leading-10 bg-transparent">
          <img src={image1} alt="image1" className="h-full mx-auto" />
        </h3>
      </div>
      <div>
        <h3 className="h-96 text-white leading-10 bg-transparent">
          <img src={image2} alt="image2" className="h-full mx-auto" />
        </h3>
      </div>
      <div>
        <h3 className="h-96 text-white leading-10 bg-transparent">
          <img src={image3} alt="image3" className="h-full mx-auto" />
        </h3>
      </div>
    </Carousel>
  );
};
