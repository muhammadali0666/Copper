import "./about__header.css";

import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import Link from "../../assets/img/link.png";
import User from "../../assets/img/user.png";
import Shopping from "../../assets/img/shopping.png";
import Union from "../../assets/img/Union.png";
import { NavLink } from "react-router-dom";

export const AboutHeader = () => {
  const [theme, setTheme] = useState(Link);

  const handleClick = () => {
    if (theme === Union) {
      setTheme(Link);
    } else if (theme === Link) {
      setTheme(Union);
    }
  };

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
                <NavLink to="/" className="header__item__link">
                  Каталог
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item__link">Новости</NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item__link">Доставка</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/about" className="header__item__link">
                  Каталог
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item__link">Контакты</NavLink>
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
        </div>
      </div>
    </div>
  );
};
