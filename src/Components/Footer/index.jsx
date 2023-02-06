import React from "react";
import "./footer.css";
import Logo from "../../assets/img/logo.png";
import Twitter from "../../assets/img/twitter.png";
import Inst from "../../assets/img/instagram.png";
import Facebook from "../../assets/img/facebook.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__first__box">
            <a href="#" className="footer__logo">
              <img
                src={Logo}
                alt="logo"
                className="footer__img__logo"
                width={175}
                height={47}
              />
            </a>
            <p className="first__P">© 2021 “Copper Pro” Все права защищенны</p>
            <p className="first__text">Политика конфиденциальности</p>
          </div>

          <div className="footer__second footer__next">
            <h4 className="second__paragraph">Навигация</h4>
            <p className="second__p">Новости</p>
            <p className="second__p">Доставка</p>
            <p className="second__p">О нас</p>
            <p className="second__p">Контакты</p>
          </div>

          <div className="footer__second footer__next">
            <h4 className="third__paragraph">Каталог</h4>
            <p className="third__text">Для эфирных масел</p>
            <p className="third__text">Для гидролатов</p>
            <p className="third__text">Медная посуда</p>
            <p className="third__text">Аксессуары из меди</p>
            <p className="third__text">Индивидуальный заказ</p>
            <p className="third__text">Скидки и предложения</p>
          </div>

          <div className="footer__fourth footer__next">
            <h4 className="fouth__paragraph">Контакты</h4>
            <p className="fourth__text">Бажана 8-Б, Киев, 02132 Украина</p>
            <p className="fourth__text">+38 (096) 990 67 56</p>
            <p className="fourth__text">a.alambik@gmail.com</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__item__link">
                  <img src={Twitter} alt="logo" className="footer__item__img" />
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__item__link">
                  <img src={Facebook} alt="logo" className="footer__item__img" />
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__item__link">
                  <img src={Inst} alt="logo" className="footer__item__img" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
