import React, { useState } from "react";

import styles from "./styles.module.scss";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>{count === 0 ? "min" : "-"}</button>
      <span>{count}</span>
      <button onClick={increment}>{count === 10 ? "max" : "+"}</button>
    </div>
  );
};

export default Counter;
