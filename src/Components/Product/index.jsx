import "./product.css"

export const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product__inner">

          <h2 className="product__paragraph">
          Наша продукция
          </h2>

          <ul className="product__list">
            <li className="product__item product__item__one">
              <p className="product__text">
              Для эфирных масел
              </p>
            </li>
            <li className="product__item product__item__two">
              <p className="product__text">
              Для гидролатов
              </p>
            </li>
            <li className="product__item  product__item__three">
              <p className="product__text">
              Медная посуда
              </p>
            </li>
            <li className="product__item product__item__four">
              <p className="product__text product__text__four">
              Аксессуары из меди
              </p>
            </li>
            <li className="product__item product__item__five">
              <p className="product__text product__text__five">
              Индивидуальный заказ
              </p>
            </li>
            <li className="product__item product__item__six">
              <p className="product__text">
              Скидки и предложения
              </p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}