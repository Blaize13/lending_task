import { ChevronRight } from "lucide-react";
import Container from "../UI/Container/Container";
import AboutImages from "../AboutImages/AboutImages";

import styles from "./styles.module.scss";
import AboutCard from "../AboutCard/AboutCard";
import Bar from "../UI/Bar/Bar";

const AboutProduct = () => {
  return (
    <Container>
      <Bar />
      <div className={styles.product_path}>
        <span>
          Home
          <ChevronRight size={16} strokeWidth={1} />
        </span>
        <span>
          Shop
          <ChevronRight size={16} strokeWidth={1} />
        </span>
        <span>
          Men
          <ChevronRight size={16} strokeWidth={1} />
        </span>
        <span className={styles.active_path}>T-shirt</span>
      </div>

      <div className={styles.product_content}>
        <AboutImages />
        <AboutCard />
      </div>
    </Container>
  );
};

export default AboutProduct;
