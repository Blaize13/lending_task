import { Mail } from "lucide-react";
import Container from "../../UI/Container/Container";
import styles from "./styles.module.scss";
import Button from "../../UI/Button/Button";

const Banner = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <div className={styles.banner_title}>
            Stay upto date about our latest Offers
          </div>
          <div className={styles.banner_subscribe}>
            <div className={styles.mail}>
              <Mail size={24} />
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className={styles.button}>
              <Button
                text="Subscribe to Newsletter"
                variant="white"
                paddingY={12}
                paddingX={88.5}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
