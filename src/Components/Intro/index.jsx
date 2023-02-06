import React from 'react'
import "./intro.css"

export const Intro = () => {
  return (
    <div className='intro'>
      <div className="container">
        <div className="intro__inner">

          <div className="intro__box">
            <h3 className="intro__paragaph">
            1 + 1 = 3
            </h3>
            <p className="intro__text">
            Закажите два товара и получите третий бесплатно
            </p>
            <button className="intro__btn">
            Перейти в каталог
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
