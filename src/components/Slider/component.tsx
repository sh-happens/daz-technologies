import * as React from "react";
import "../../index.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import izzy1 from "../../images/izzy1.jpg";
import izzy2 from "../../images/izzy2.jpg";
import izzy3 from "../../images/izzy3.jpg";
import izzy4 from "../../images/izzy4.jpg";
import izzy5 from "../../images/izzy5.jpg";
import izzy6 from "../../images/izzy6.jpg";
import izzy7 from "../../images/izzy7.jpg";
import izzy8 from "../../images/izzy8.jpg";
import izzy9 from "../../images/izzy9.jpg";
import izzy10 from "../../images/izzy10.jpg";
import izzy11 from "../../images/izzy11.jpg";
import izzy12 from "../../images/izzy12.jpg";
import izzy13 from "../../images/izzy13.jpg";
import izzy14 from "../../images/izzy14.jpg";
import izzy15 from "../../images/izzy15.jpg";
import izzy16 from "../../images/izzy16.jpg";
import izzy17 from "../../images/izzy17.jpg";
import izzy18 from "../../images/izzy18.jpg";
import izzy19 from "../../images/izzy19.jpg";
import izzy20 from "../../images/izzy20.jpg";
import izzy21 from "../../images/izzy21.jpg";
import izzy22 from "../../images/izzy22.jpg";
import izzy23 from "../../images/izzy23.jpg";
import izzy24 from "../../images/izzy24.jpg";
import izzy25 from "../../images/izzy25.jpg";
import izzy26 from "../../images/izzy26.jpg";
import izzy27 from "../../images/izzy27.jpg";
import izzy28 from "../../images/izzy28.jpg";
import izzy29 from "../../images/izzy29.jpg";
import izzy30 from "../../images/izzy30.jpg";
import izzy31 from "../../images/izzy31.jpg";
import izzy32 from "../../images/izzy32.jpg";
import izzy33 from "../../images/izzy33.jpg";
import izzy34 from "../../images/izzy34.jpg";
import izzy35 from "../../images/izzy35.jpg";
import izzy36 from "../../images/izzy36.jpg";
import izzy37 from "../../images/izzy37.jpg";
import izzy38 from "../../images/izzy38.jpg";
import izzy39 from "../../images/izzy39.jpg";
import izzy40 from "../../images/izzy40.jpg";
import izzy41 from "../../images/izzy41.jpg";
import izzy42 from "../../images/izzy42.jpg";
import izzy43 from "../../images/izzy43.jpg";
import izzy44 from "../../images/izzy44.jpg";
import izzy45 from "../../images/izzy45.jpg";
import izzy46 from "../../images/izzy46.jpg";
import izzy47 from "../../images/izzy47.jpg";
import izzy48 from "../../images/izzy48.jpg";
import izzy49 from "../../images/izzy49.jpg";
import izzy50 from "../../images/izzy50.jpg";
import izzy51 from "../../images/izzy51.jpg";
import izzy52 from "../../images/izzy52.jpg";
import izzy53 from "../../images/izzy53.jpg";
import izzy54 from "../../images/izzy54.jpg";
import izzy55 from "../../images/izzy55.jpg";

const animation = { duration: 10000, easing: (t: number) => t };

export const Slider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 6,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide ">
        <img src={izzy1} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy2} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy3} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy4} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy5} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy6} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy7} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy8} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy9} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy10} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy11} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy12} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy13} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy14} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy15} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy16} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy17} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy18} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy19} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy20} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy21} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy22} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy23} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy24} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy25} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy26} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy27} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy28} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy29} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy30} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy31} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy32} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy33} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy34} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy35} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy36} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy37} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy38} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy39} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy40} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy41} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy42} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy43} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy44} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy45} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy46} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy47} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy48} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy49} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy50} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy51} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy52} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy53} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide ">
        <img src={izzy54} alt="" className="h-[350px]" />
      </div>
      <div className="keen-slider__slide">
        <img src={izzy55} alt="" className="h-[350px]" />
      </div>
    </div>
  );
};

export {};
