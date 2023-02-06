import "./card.css";
import Worker from "../../assets/img/ivan.png";

export const Card = () => {
  return (
    <>
      <div className="card__box">
        <img className="card__img" src={Worker} alt="worker" width={63} height={63} />
        <h4 className="card__paragraph">Иван Иванов</h4>
        <p className="card__text">
          Наше оборудование прозводится вручную. Мы постоянно производим
          контроль качества произведенной продукции. В то же время, если в ходе
          транспортировки или эксплуатации в течении первых 2 лет происходят
          поломки, мы всегда находим с клиентом наиболее удобный вариант решения
          вопроса.
        </p>
        <p className="card__p">20.10.21</p>
      </div>
    </>
  );
};
