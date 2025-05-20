import React from "react";
import { ICrad } from "../../../data/mock";
import styles from "./styles.module.scss";
import fullStar from "../../../assets/icons/star-full.svg";
import halfStar from "../../../assets/icons/star-half.svg";
import { countStarsRate } from "../../../utils/stars-rate/countStarsRate";

interface ICardProps {
  data: ICrad;
}

const Card: React.FC<ICardProps> = ({ data }) => {
  const { imgSrc, cardTitle, rate, price, discount } = data;

  const stars = countStarsRate(rate);
  const truePrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={cardTitle} className={styles.card_image} />
      <h3 className={styles.card_title}>{cardTitle}</h3>

      <div className={styles.rating}>
        {stars.map((type, i) => (
          <img
            key={i}
            src={type === "full" ? fullStar : halfStar}
            alt={type}
            className={styles.stars_rate}
          />
        ))}
        {`${rate.toFixed(1)}/5`}
      </div>

      <div className={styles.prices}>
        {discount ? (
          <>
            <span className={styles.newPrice}>${Math.ceil(truePrice)}</span>
            <span className={styles.oldPrice}>${price}</span>
            <span className={styles.discount}>{`-${discount}%`}</span>
          </>
        ) : (
          <span className={styles.newPrice}>${truePrice}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
