import { countStarsRate } from "../../utils/stars-rate/countStarsRate";

import fullStar from "../../assets/icons/star-full.svg";
import halfStar from "../../assets/icons/star-half.svg";
import Bar from "../UI/Bar/Bar";

import styles from "./styles.module.scss";
import SelectColor from "../UI/SelectColor/SelectColor";
import ChooseSize from "../UI/ChooseSize/ChooseSize";
import Counter from "../UI/Counter/Counter";
import Button from "../UI/Button/Button";

const AboutCard = () => {
  const data = {
    title: "one life graphic t-shirt",
    rate: 4.5,
    price: 300,
    discount: 40,
    supTitle:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  };

  const { discount, price, rate, title, supTitle } = data;

  const stars = countStarsRate(rate);
  const truePrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className={styles.about_target}>
      <h3 className={styles.title}>{title}</h3>

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
        <span className={styles.newPrice}>${Math.ceil(truePrice)}</span>
        <span className={styles.oldPrice}>${price}</span>
        <span className={styles.discount}>{`-${discount}%`}</span>
      </div>
      <h5 className={styles.sup_title}>{supTitle}</h5>
      <Bar />
      <SelectColor />
      <Bar />
      <ChooseSize />
      <Bar />
      <div className={styles.create_order}>
        <Counter />
        <Button text="Add to Card" paddingX={157.5} paddingY={15} />
      </div>
    </div>
  );
};

export default AboutCard;
