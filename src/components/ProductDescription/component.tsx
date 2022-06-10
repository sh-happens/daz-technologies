import React from "react";
import about1 from "../../images/about-1.jpg";

export const ProductDescription = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto my-0 px-10 pt-0 pb-10">
        <div className="font-medium text-4xl leading-10 text-black text-center uppercase mb-14">
          Характеристики
        </div>
        <div className="flex">
          <div className="inline-block align-top pr-5 w-1/2 box-border h-[580px]">
            <div className="bg-slate-100 h-full">
              <h2 className="bg-cyan-500 text-lg font-medium   text-white text-center p-2.5 m-0">
                Технические характеристики Aura Roboclean SPLUS
              </h2>
              <article className="text-base font-medium py-10 px-12">
                <table className="border-collapse" border-spacing="1">
                  <tbody>
                    <tr>
                      <td>Номинальная мощность турбины</td>
                      <td className="text-right">
                        <strong>900 Вт</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Напряжение питания</td>
                      <td className="text-right">
                        <strong>220 - 240 В, 50-60 Гц</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Всасывающее давление</td>
                      <td className="text-right">
                        <strong>1900 мм вод. ст. (~190 мбар)</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Поток всасывания</td>
                      <td className="text-right">
                        <strong>200 м3 / час</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Объем резервуара для отходов</td>
                      <td className="text-right">
                        <strong>1,8 л</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Объем резервуара для чистой воды</td>
                      <td className="text-right">
                        <strong>3,6 л</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Уровень шум</td>
                      <td className="text-right">
                        <strong>65 дБ</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Мощность двигателя электрощетки</td>
                      <td className="text-right">
                        <strong>150 Вт</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Вес пылесоса нетто</td>
                      <td className="text-right">
                        <strong>5,0 кг</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Вес полного комплекта брутто</td>
                      <td className="text-right">
                        <strong>23,0 кг</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Класс изоляции</td>
                      <td className="text-right">
                        <strong>II</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </div>
          </div>
          <div className="inline-block align-top pr-5 w-1/2 box-border">
            <div className="bg-slate-100 h-full">
              <h2 className="bg-cyan-500 text-lg font-medium   text-white text-center p-2.5 m-0">
                Циклическая скорость вращения сепаратора
              </h2>
              <article className="text-base font-medium py-10 px-12">
                <table className="h-[302px] w-[374px]">
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <p>
                          <img
                            title=""
                            className="h-[140px] w-[150px]"
                            alt=""
                            src={about1}
                          />
                        </p>
                      </td>
                      <td border-spacing="1">
                        <table className="ml-2.5">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Уровень</strong>
                              </td>
                              <td className="text-right">
                                <strong>Об./мин</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>1. Уровень:</td>
                              <td className="text-right">
                                <strong>7 500</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>2. Уровень:</td>
                              <td className="text-right">
                                <strong>9&nbsp;000</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>3. Уровень:</td>
                              <td className="text-right">
                                <strong>10 500</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>4. Уровень:</td>
                              <td className="text-right">
                                <strong>12&nbsp;000</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>5. Уровень:</td>
                              <td className="text-right">
                                <strong>13&nbsp;500</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>6. Уровень:</td>
                              <td className="text-right">
                                <strong>15&nbsp;000</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>7. Уровень:</td>
                              <td className="text-right">
                                <strong>16&nbsp;500</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>8. Уровень:</td>
                              <td className="text-right">
                                <strong>18&nbsp;000</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>9. Уровень:</td>
                              <td className="text-right">
                                <strong>19 000</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p className="text-left">&nbsp;</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
