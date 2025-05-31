import { useState } from "react";

import styles from "./styles.module.scss";

const ChooseSize = () => {
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h5 className={styles.title}>Choose Size</h5>
      <div className={styles.size_container}>
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`${styles.size} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSize;
