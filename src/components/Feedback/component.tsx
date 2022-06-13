import { CommentOutlined, StarFilled } from "@ant-design/icons";
import React from "react";

export const Feedback = () => {
  return (
    <div className="block-reviews center-wrap">
      <div className="font-medium text-4xl text-black text-center uppercase my-12">
        Отзывы покупателей
      </div>
      <div className="item slick-slide slick-current slick-active width: 1200px">
        <div className="relative max-w-[900px] pt-5 px-32 pb-7 bg-gray-100 mt-0 mx-auto mb-7">
          <div className="h-7 text-center mb-3.5">
            <StarFilled
              style={{ fontSize: "20px", color: "#fbbf24" }}
              className="mx-0.5"
            />
            <StarFilled
              style={{ fontSize: "20px", color: "#fbbf24" }}
              className="mx-0.5"
            />
            <StarFilled
              style={{ fontSize: "20px", color: "#fbbf24" }}
              className="mx-0.5"
            />
            <StarFilled
              style={{ fontSize: "20px", color: "#fbbf24" }}
              className="mx-0.5"
            />
            <StarFilled
              style={{ fontSize: "20px", color: "#fbbf24" }}
              className="mx-0.5"
            />
          </div>
          <article className="text-center text-xl">
            <p>
              &nbsp;Пользуюсь аппаратом уже почти 2 года. Претензий в работе
              нет, очень качественно убирает. Вобщем, если что-то приобретать,
              лучше качественное и надолго. Купил и ни о каких пылесосах,
              очистителях, увлажнителях воздуха не думаешь еще долго. Поэтому
              рекомендую!
            </p>
            <div className="corner"></div>
          </article>
        </div>
        <div className="max-w-[260px] my-0 mx-auto flex">
          <CommentOutlined style={{ fontSize: "40px", color: "#fbbf24" }} />
          <div className="ml-16 pt-1">
            <div className="font-medium text-base">Исаева Г.,</div>
            <div className="font-medium text-base">
              Дата покупки: Октябрь 2012
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
