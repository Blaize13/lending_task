import React from "react";
import hero_img from "../../assets/images/hero_img.jpg";
import styles from "./styles.module.scss";
import Button from "../UI/Button/Button";
import { ReactComponent as Hero_star } from "../../assets/icons/hero_star.svg";
import BrandWall from "../BrandWall/BrandWall";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Hero_star className={styles.small_star} />
        <Hero_star className={styles.big_star} />
        <div className={styles.hero_info}>
          <h1 className={styles.hero_title}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <h6 className={styles.hero_subtitle}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h6>
          <Button
            variant="black"
            text="Shop Now"
            paddingY={15}
            paddingX={67.5}
          />
          <div className={styles.stat}>
            <div className={styles.stat_item}>
              <div className={styles.stat_number}>200+</div>
              <span className={styles.stat_text}>International Brands</span>
            </div>
            <div className={styles.horisontal_bar}></div>
            <div className={styles.stat_item}>
              <div className={styles.stat_number}>2,000+</div>
              <span className={styles.stat_text}>High-Quality Products</span>
            </div>
            <div className={styles.horisontal_bar}></div>
            <div className={styles.stat_item}>
              <div className={styles.stat_number}>30,000+</div>
              <span className={styles.stat_text}>Happy Customers</span>
            </div>
          </div>
        </div>
        <img src={hero_img} alt="Hero" className={styles.hero_img}></img>
      </div>
      <BrandWall />
    </div>
  );
};

export default Hero;
