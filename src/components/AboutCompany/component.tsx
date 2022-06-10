import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";

import about1 from "../../images/about-1.jpg";
import about2 from "../../images/about-2.jpg";
import about3 from "../../images/about-3.jpg";

export const AboutCompany = () => {
  const [isAboutUsModalVisible, setIsAboutUsModalVisible] = useState(false);
  const [isSupportServiceModalVisible, setIsSupportServiceModalVisible] =
    useState(false);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);

  const showModal = (name: string) => {
    if (name === "aboutUs") {
      setIsAboutUsModalVisible(true);
    } else if (name === "supportService") {
      setIsSupportServiceModalVisible(true);
    } else {
      setIsHistoryModalVisible(true);
    }
  };

  const handleOk = (name: string) => {
    if (name === "aboutUs") {
      setIsAboutUsModalVisible(false);
    } else if (name === "supportService") {
      setIsSupportServiceModalVisible(false);
    } else {
      setIsHistoryModalVisible(false);
    }
  };

  const handleCancel = (name: string) => {
    if (name === "aboutUs") {
      setIsAboutUsModalVisible(false);
    } else if (name === "supportService") {
      setIsSupportServiceModalVisible(false);
    } else {
      setIsHistoryModalVisible(false);
    }
  };

  return (
    <>
      <div className="block-about">
        <div className="max-w-7xl my-0 mx-auto py-0 px-10">
          <div className="font-medium text-4xl text-black text-center mb-2.5 uppercase mt-5">
            Добро пожаловать в мир робоклин
          </div>
          <div className="text-center text-base text-black font-medium max-w-2xl mt-0 mx-auto mb-16">
            Roboclean – это не электрический пылесос, это необычная система
            чистоты и здоровья, содержащая в себе много функций, имеющих
            свойство втягивать пыль на 99.99 %, создавая при этом наичистейшие
            условия для проживания Вашей семьи.
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <button
              onClick={() => showModal("aboutUs")}
              className="flex flex-col items-center"
            >
              <img src={about1} alt="" />
              <h2 className="text-lg font-medium uppercase mb-1 text-cyan-500 mt-2">
                О нас
              </h2>
              <p className="text-base font-medium text-black max-w-[235px] margin: 0 auto 0 auto;">
                Доверие семей в более чем 35 странах во всем мире
              </p>
            </button>
            <Modal
              title="Basic Modal"
              visible={isAboutUsModalVisible}
              onOk={() => handleOk("aboutUs")}
              onCancel={() => handleCancel("aboutUs")}
            >
              <h2>Компания Aura GmbH</h2>
              <p className="fck_content-description">
                Как генеральный офис, так и производственные мощности компании
                «Aura GmbH» расположены в городе Вайтерштадт неподалеку от
                Франкфурта, Германия. Исходя из убеждения, что непосредственное
                общение является наилучшим и наиболее надёжным рекламным
                средством, мы реализуем нашу продукцию исключительно посредством
                прямых продаж.
              </p>
              <p>
                Ориентируя ответственность нашей компании на поддержание
                благополучия клиентов, мы сумели завоевать доверие семей в более
                чем 35 странах во всем мире. Такой успех был достигнут благодаря
                тому, что мнение клиентов, а также непрерывное осуществление
                разработок и контроля качества моделей продукции стали для нас
                основным приоритетом.
              </p>
              <p>
                Наша продукция производится согласно директиве ISO9001 на
                производственных сооружениях, инфраструктура которых оснащена
                высокими технологиями, и представляется потребителю в
                соответствии с международными стандартами под управлением
                непрерывно совершенствующегося отдела перспективных разработок и
                качества, несущего ответственность за здоровье потребителя. На
                производственных сооружениях наряду с производством, без ущерба
                для качества, в результате нашей чувствительности к окружающему
                миру ведется деятельность CDP (Carbon Footprint проекта).
              </p>
              <p>
                Как один из элементов нашей политики, направленной на программу
                «здоровье и клиент», берущей начало с 1996 года и действующей по
                сегодняшний день, продукция «Aura Roboclean» достигла миллионов
                потребителей разных географических зон, распространившись от
                востока до запада и от севера до юга. Вышедшая на первый план
                эта продукция, проектными составными которой являются
                продуктивность, бесшумность и друг потребителя удостоилась
                премий “Red Dot Design Award 2013”, “Good Design 2015”, “Iconic
                Awards 2016” и “IF Design 2016”.
              </p>
              <p>
                Продолжение здоровой жизни – это мечта каждого индивидуума,
                общества и нации. Подобное возможно только благодаря защите и
                проживанию в чистой окружающей среде. Aura Roboclean, в свою
                очередь, не является целью для достижения этой задачи, а только
                средством. Мы счастливы, что производим это средство для
                здоровья наших клиентов.
              </p>
            </Modal>
          </div>
          <div>
            <button
              onClick={() => showModal("supportService")}
              className="flex flex-col items-center"
            >
              <img src={about2} alt="" />
              <h2 className="text-lg font-medium uppercase mb-1 text-cyan-500 mt-2">
                Сервисное обслуживание и поддержка
              </h2>
              <p className="text-base font-medium text-black max-w-[235px] margin: 0 auto 0 auto;">
                Немецкое качество
              </p>
            </button>
            <Modal
              title="Basic Modal"
              visible={isSupportServiceModalVisible}
              onOk={() => handleOk("supportService")}
              onCancel={() => handleCancel("supportService")}
            >
              <h1>
                <strong>Сервисное обслуживание и поддержка</strong>
              </h1>
              <p>
                Сервисные центры компании Аура Казахстан, предлагают клиентам
                высококвалифицированное и непрерывное сервисное обслуживание, и
                индивидуальный подход к каждому клиенту. Сервисные центры
                успешно работают более 10 лет. Стаж мастеров компании
                насчитывает более 5-ти лет по ремонту продукции Roboclean. При
                ремонте используются только оригинальные запчасти, поставляемых
                напрямую заводом-изготовителем. Производится постоянный
                мониторинг и анализ запасных частей и аксессуаров работы
                очистительной системы во главе с главным инженером по
                техническим вопросам. Поддерживается непрерывная связь с
                заводом-изготовителем по улучшению качества продукции.
              </p>
              <p>
                Сервисное обслуживание осуществляются в следующих крупных
                городах Казахстана:{" "}
                <strong>
                  Алматы, Астана, Шымкент, Караганды, Актобе, Тараз, Атырау,
                  Актау, Талдыкорган, Орал, Оскемен
                </strong>
                , а так же в городах Центральной Азии:{" "}
                <strong>Ташкент и Бишкек.</strong> <br />
                Сервисные центры работают каждый день без перерыва и выходных.
                Для удобства обращения клиентов функционирует Call center
                компании, где вы можете проконсультироваться по всем
                интересующим вас вопросам.
              </p>
              <p>
                Мы надеемся, что Вы останетесь довольны и счастливы от
                использования продукции Aura Roboclean и охотно поделитесь с
                другими, сообщите нам о своих пожеланиях и предложениях.
              </p>
            </Modal>
          </div>
          <div>
            <button
              onClick={() => showModal("history")}
              className="flex flex-col items-center"
            >
              <img src={about3} alt="" />
              <h2 className="text-lg font-medium uppercase mb-1 text-cyan-500 mt-2">
                История
              </h2>
              <p className="text-base font-medium text-black max-w-[235px] margin: 0 auto 0 auto;">
                C 1990 года
              </p>
            </button>
            <Modal
              title="Basic Modal"
              visible={isHistoryModalVisible}
              onOk={() => handleOk("history")}
              onCancel={() => handleCancel("history")}
            >
              <h5>1990 Успешный старт - The Cleanning Robot</h5>
              <p>
                Первый Robodean был представлен под именем: The Cleaning Robot.
              </p>
              <p>
                Первая модель комплектовалась пластиковой трубкой и ещё не было
                автоматической системы сматывания электрошнура.
              </p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
