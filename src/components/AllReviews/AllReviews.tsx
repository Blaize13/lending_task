import React, { useState } from "react";
import { ITopReview } from "../../data/topReview";
import { ChevronDown, SlidersVertical } from "lucide-react";

import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import Bar from "../UI/Bar/Bar";

import styles from "./styles.module.scss";
import ReviewCard from "../Shared/ReviewCard/ReviewCard";

interface IAllReviewsProps {
  reviewCards: ITopReview[];
}

const AllReviews: React.FC<IAllReviewsProps> = ({ reviewCards }) => {
  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

  const [activeIndex, setActiveIndex] = useState(1);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoading(false);
    }, 1000);
  };

  const allVisible = visibleCount >= reviewCards.length;

  return (
    <div>
      <Container>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <span
              key={index}
              className={`${styles.tab} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </span>
          ))}
        </div>
        <Bar />
        <div className={styles.reviews_header}>
          <div className={styles.reviews_title}>
            <h3>All Reviews</h3>
            <span>({reviewCards.length})</span>
          </div>
          <div className={styles.reviews_menu}>
            <div className={styles.settings}>
              <SlidersVertical size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.menu}>
              <span className={styles.menu_text}>Latest</span>
              <ChevronDown
                size={20}
                strokeWidth={1.75}
                className={styles.icon}
              />
            </div>
            <Button text="Write a Review" paddingX={30} paddingY={12} />
          </div>
        </div>
        <div className={styles.reviews_container}>
          {reviewCards.slice(0, visibleCount).map((card) => (
            <div className={styles.review_card_slide} key={card.id}>
              <ReviewCard data={card} variant={"allReviews"} />
            </div>
          ))}
        </div>
        <div className={styles.btn}>
          {!allVisible && (
            <Button
              text={loading ? "Loading..." : "Load More Reviews"}
              paddingX={45}
              paddingY={15}
              variant="transparent"
              onClick={loadMore}
              disabled={loading}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllReviews;
