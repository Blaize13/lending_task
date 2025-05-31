import { useState } from "react";
import { Check } from "lucide-react";

import styles from "./styles.module.scss";

const circleColors = ["#4F4631", "#314F4A", "#31344F"];

const SelectColor = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h6 className={styles.title}>Select Colors</h6>
      <div className={styles.choose_color}>
        {circleColors.map((color, index) => (
          <div
            key={index}
            className={styles.circle}
            onClick={() => setActiveIndex(index)}
            style={{ backgroundColor: color }}
          >
            {activeIndex === index && <Check className={styles.icon} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
