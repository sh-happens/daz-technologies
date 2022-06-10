import React from "react";

export const Feedback = () => {
  return (
    <div className="block-reviews center-wrap">
      <div className="block-title">Отзывы покупателей</div>
      <div className="item slick-slide slick-current slick-active width: 1200px">
        <div className="top">
          <div className="stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </div>
          <article className="content">
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
        <div className="bottom clearfix">
          <img
            src="/imagine/50x50/feedback1.jpg"
            alt="Исаева Г."
            title="Исаева Г."
          />
          <div className="right">
            <div className="name">Исаева Г.,</div>
            <div className="name">Дата покупки: Октябрь 2012</div>
          </div>
        </div>
      </div>
    </div>
  );
};
