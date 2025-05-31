import { useState } from "react";
import styles from "./styles.module.scss";
import { productImages } from "../../data/aboutProductImg";

const AboutImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.small_images}>
        {productImages.map((img, index) => (
          <div
            key={index}
            className={`${styles.small_img} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={img} alt={`image ${index}`} />
          </div>
        ))}
      </div>

      <div className={styles.main_img}>
        <img
          key={activeIndex}
          src={productImages[activeIndex]}
          alt="Main product"
          className={styles.fadeIn}
        />
      </div>
    </div>
  );
};
export default AboutImages;
