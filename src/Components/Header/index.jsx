import React,{useState} from "react";
import "./header.css";
import Logo from "../../assets/img/logo.png";
import Link from "../../assets/img/link.png";
import User from "../../assets/img/user.png";
import Shopping from "../../assets/img/shopping.png";
import Carousel from "react-elastic-carousel";
import Union from "../../assets/img/Union.png";

export const Header = () => {

  const [theme, setTheme] = useState(Link);

  const handleClick = () => {
    if(theme === Union){
      setTheme(Link)
    }else if(theme === Link){
      setTheme(Union)
    }
  }

  return (
    <div className="header">
      <div className="header__inner">
        <div className="container">
          <div className="header-top">
            <a href="#" className="header__logo">
              <img
                src={Logo}
                alt="logo"
                width={160}
                height={43}
                className="header__img"
              />
            </a>

            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__item__link">
                  Каталог
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__item__link">
                  Новости
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__item__link">
                  Доставка
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__item__link">
                  О нас
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__item__link">
                  Контакты
                </a>
              </li>
            </ul>

            <ul className="header__end__list">
              <li className="header__end__item">
                <img
                  src={theme}
                  alt="img"
                  className="header__end__img"
                  width={24}
                  height={24}
                  onClick={handleClick}
                />
              </li>
              <li className="header__end__item">
                <img
                  src={User}
                  alt="img"
                  className="header__end__img"
                  width={24}
                  height={24}
                />
              </li>
              <li className="header__end__item">
                <img
                  src={Shopping}
                  alt="img"
                  className="header__end__img"
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </div>

          <div className="header__bottom">
            <Carousel>
              <div className="header__bottom__box">
                <h1 className="header__bottom__paragraph">Хит продаж</h1>
                <p className="header__bottom__text">
                  Дистиллятор для эфирных масел
                </p>
                <div className="header__bottom__mini">
                  <p className="header__bottom__p">Цена</p>
                  <p className="header__bottom__p header__bottom__p__next">
                    4 906 грн
                  </p>
                </div>
                <button className="header__bottom__btn">Купить</button>
              </div>

              <div className="header__bottom__box">
                <h1 className="header__bottom__paragraph">О нас</h1>
                <p className="header__bottom__text">
                  Мы любим все, что сделано из меди
                </p>
                <div className="header__bottom__mini">
                  <p className="header__bottom__p">Цена</p>
                  <p className="header__bottom__p header__bottom__p__next">
                    3 906 грн
                  </p>
                </div>
                <button className="header__bottom__btn">Купить</button>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
