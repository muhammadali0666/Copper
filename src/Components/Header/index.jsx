import React from 'react'
import "./header.css"
import Logo from "../../assets/img/logo.png"

export const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="container">

          <div className="header-top">
            <a href="#" className="header__logo">
              <img src={Logo} alt="logo" width={160} height={43} className="header__img" />
            </a>
          </div>

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

        </div>
      </div>
    </div>
  )
}
