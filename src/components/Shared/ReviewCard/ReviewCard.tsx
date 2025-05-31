import { CircleCheckBig } from "lucide-react";
import React from "react";
import { ITopReview } from "../../../data/topReview";
import { countStarsRate } from "../../../utils/stars-rate/countStarsRate";
import styles from "./styles.module.scss";
import fullStar from "../../../assets/icons/star-full.svg";
import halfStar from "../../../assets/icons/star-half.svg";

interface IReviewCardProps {
  data: ITopReview;
  variant: "topReviews" | "allReviews";
}

const ReviewCard: React.FC<IReviewCardProps> = ({ data, variant }) => {
  const { rate, user, text, posted } = data;
  const stars = countStarsRate(rate);

  const isTop = variant === "topReviews";

  return (
    <div>
      <div
        className={`${styles.review_card} ${
          isTop ? styles.top_reviews_card : styles.all_reviews_card
        }`}
      >
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
        {!isTop && <div className={styles.posted}>{posted}</div>}
      </div>
    </div>
  );
};

export default ReviewCard;
