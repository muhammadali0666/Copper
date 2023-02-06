import "./discount.css"
import React,{useState} from "react";
import Carousel from "react-elastic-carousel";
import Link from "../../assets/img/link.png";
import Union from "../../assets/img/Union.png";

export const Discount = () => {

  const [theme, setTheme] = useState(Link);

  const handleClick = () => {
    if(theme === Union){
      setTheme(Link)
    }else if(theme === Link){
      setTheme(Union)
    }
  }

  const [theme1, setTheme1] = useState(Link);

  const handleClick1 = () => {
    if(theme === Union){
      setTheme1(Link)
    }else if(theme === Link){
      setTheme1(Union)
    }
  }

  const [theme2, setTheme2] = useState(Link);

  const handleClick2 = () => {
    if(theme === Union){
      setTheme2(Link)
    }else if(theme === Link){
      setTheme2(Union)
    }
  }

  const [theme3, setTheme3] = useState(Link);

  const handleClick3 = () => {
    if(theme === Union){
      setTheme3(Link)
    }else if(theme === Link){
      setTheme3(Union)
    }
  }

  const [theme4, setTheme4] = useState(Link);

  const handleClick4 = () => {
    if(theme === Union){
      setTheme4(Link)
    }else if(theme === Link){
      setTheme4(Union)
    }
  }

  const [theme5, setTheme5] = useState(Link);

  const handleClick5 = () => {
    if(theme === Union){
      setTheme5(Link)
    }else if(theme === Link){
      setTheme5(Union)
    }
  }

  const [theme6, setTheme6] = useState(Link);

  const handleClick6 = () => {
    if(theme === Union){
      setTheme6(Link)
    }else if(theme === Link){
      setTheme6(Union)
    }
  }

  const [theme7, setTheme7] = useState(Link);

  const handleClick7 = () => {
    if(theme === Union){
      setTheme7(Link)
    }else if(theme === Link){
      setTheme7(Union)
    }
  }

  const [theme8, setTheme8] = useState(Link);

  const handleClick8 = () => {
    if(theme === Union){
      setTheme8(Link)
    }else if(theme === Link){
      setTheme8(Union)
    }
  }

  return (
    <div className="products">
      <Carousel>
        <div className="container">
          <div className="products__inner">
            <h1 className="products__paragraph">Скидки</h1>
            <ul className="products__list">
              <li className="products__item">
                <div className="products__img products__img__one">
                  <div className="product__mini__box">
                    <img
                      src={theme}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
              <li className="products__item">
                <div className="products__img products__img__two">
                  <div className="product__mini__box">
                    <img
                      src={theme1}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick1}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
              <li className="products__item">
                <div className="products__img products__img__three">
                  <div className="product__mini__box">
                    <img
                      src={theme2}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick2}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
            </ul>
            <button className="products__btn">Перейти в каталог</button>
          </div>
        </div>
        <div className="container">
          <div className="products__inner">
            <h1 className="products__paragraph">Лучшие продажи</h1>
            <ul className="products__list">
              <li className="products__item">
                <div className="products__img products__img__one">
                  <div className="product__mini__box">
                    <img
                      src={theme3}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick3}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
              <li className="products__item">
                <div className="products__img products__img__two">
                  <div className="product__mini__box">
                    <img
                      src={theme4}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick4}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
              <li className="products__item">
                <div className="products__img products__img__three">
                  <div className="product__mini__box">
                    <img
                      src={theme5}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick5}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
            </ul>
            <button className="products__btn">Перейти в каталог</button>
          </div>
        </div>
        <div className="container">
          <div className="products__inner">
            <h1 className="products__paragraph">Лучшие продажи</h1>
            <ul className="products__list">
              <li className="products__item">
                <div className="products__img products__img__one">
                  <div className="product__mini__box">
                    <img
                      src={theme6}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick6}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
              <li className="products__item">
                <div className="products__img products__img__two">
                  <div className="product__mini__box">
                    <img
                      src={theme7}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick7}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
              <li className="products__item">
                <div className="products__img products__img__three">
                  <div className="product__mini__box">
                    <img
                      src={theme8}
                      alt="img"
                      width={24}
                      height={24}
                      className="product__img"
                      onClick={handleClick8}
                    />
                  </div>
                </div>
                <div className="products__box">
                  <p className="products__p">
                    Медный чайник с фарфоровой ручкой
                  </p>
                  <p className="products__bold">1 953 грн</p>
                </div>
              </li>
            </ul>
            <button className="products__btn">Перейти в каталог</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
