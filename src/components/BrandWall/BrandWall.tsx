import React from "react";
import styles from "./styles.module.scss";
import Container from "../UI/Container/Container";

const BrandWall = () => {
  return (
    <div className={styles.brand_wall}>
      <Container>
        <div className={styles.brands}>
          <span className={styles.brand_versace}>versace</span>
          <span className={styles.brand_zara}>zara</span>
          <span className={styles.brand_gucci}>gucci</span>
          <span className={styles.brand_prada}>prada</span>
          <span className={styles.brand_calvinklein}>calvinklein</span>

          <span className={styles.brand_versace}>versace</span>
          <span className={styles.brand_zara}>zara</span>
          <span className={styles.brand_gucci}>gucci</span>
          <span className={styles.brand_prada}>prada</span>
          <span className={styles.brand_calvinklein}>calvin klein</span>
        </div>
      </Container>
    </div>
  );
};

export default BrandWall;
