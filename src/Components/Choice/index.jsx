import React from "react";
import "./choice.css";
import Belgi from "../../assets/img/Vector.png";
import One from "../../assets/img/first.png"
import Two from "../../assets/img/second.png"
import Three from "../../assets/img/third.png"
import Four from "../../assets/img/fourth.png"
import Five from "../../assets/img/fivth.png"
import Six from "../../assets/img/sixth.png"
import Seven from "../../assets/img/seventh.png"
import Eight from "../../assets/img/eightth.png"

export const Choice = () => {
  return (
    <div className="choice">
      <div className="container">
        <div className="choice__inner">
          <h1 className="choice__paragraphs">Почему выбирают нас</h1>

          <div className="choice__box">
            <ul className="choice__list">
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={One} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Two} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Three} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Four} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
            </ul>
            <ul className="choice__list">
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Five} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Six} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Seven} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
              <li className="choice__item">
                <div className="choice__mini__box">
                  <img src={Eight} alt="img" className="choice__img" />
                </div>
                <h4 className="choice__paragraph">Аутентичность</h4>
                <p className="choice__text">
                  Медное перегонное оборудование используется для получения
                  эфирных масел с незапамятных времен.
                </p>
                <button className="choice__btn">
                  Читать больше
                  <img
                    src={Belgi}
                    alt="belgi"
                    className="choice__mini__img"
                    width={8}
                    height={5}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
