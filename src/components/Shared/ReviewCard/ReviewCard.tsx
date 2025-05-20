import { CircleCheckBig } from "lucide-react";
import React from "react";
import { ITopReview } from "../../../data/topReview";
import { countStarsRate } from "../../../utils/stars-rate/countStarsRate";
import styles from "./styles.module.scss";
import fullStar from "../../../assets/icons/star-full.svg";
import halfStar from "../../../assets/icons/star-half.svg";

interface IReviewCardProps {
  data: ITopReview;
}

const ReviewCard: React.FC<IReviewCardProps> = ({ data }) => {
  const { rate, user, text } = data;
  const stars = countStarsRate(rate);
  return (
    <div>
      <div className={styles.review_card}>
        <div className={styles.stars_rate}>
          {stars.map((type, i) => (
            <img
              key={i}
              src={type === "full" ? fullStar : halfStar}
              alt={type}
              className={styles.star}
            />
          ))}
        </div>
        <div className={styles.review_user}>
          <span className={styles.review_user_name}>{user}</span>
          <CircleCheckBig color="green" size={20} />
        </div>
        <div className={styles.review_text}>"{text}"</div>
      </div>
    </div>
  );
};

export default ReviewCard;
