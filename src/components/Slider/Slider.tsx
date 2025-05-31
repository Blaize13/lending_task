import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.scss";
import Container from "../UI/Container/Container";
import ReviewCard from "../Shared/ReviewCard/ReviewCard";
import { ITopReview } from "../../data/topReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

interface ISliderProps {
  reviewCards: ITopReview[];
}

const Slider: React.FC<ISliderProps> = ({ reviewCards }) => {
  return (
    <div className={styles.slider_wrapper}>
      <Container>
        <span className={styles.slider_title}>Our happy customers</span>
      </Container>
      <div className={styles.review_cards}>
        <div className={styles.slider_navigation}>
          <div className={styles.slider_navigation_items}>
            <button className={`${styles.arrow} my-swiper-prev`}>
              <MoveLeft />
            </button>
            <button className={`${styles.arrow} my-swiper-next`}>
              <MoveRight />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={"auto"}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: ".my-swiper-next",
            prevEl: ".my-swiper-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={10}
          breakpoints={{
            2001: {
              slidesPerView: "auto",
            },
            2000: {
              slidesPerView: 5,
            },
            1800: {
              slidesPerView: 4.5,
            },
            1600: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 2.7,
            },
            1000: {
              slidesPerView: 2.5,
            },
            840: {
              slidesPerView: 2,
            },
            610: {
              slidesPerView: 1.5,
            },
            200: {
              slidesPerView: 1,
            },
          }}
        >
          {reviewCards.map((card) => (
            <SwiperSlide className={styles.review_card_slide} key={card.id}>
              <ReviewCard data={card} variant={"topReviews"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
