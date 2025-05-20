import React from "react";
import Container from "../UI/Container/Container";
import styles from "./styles.module.scss";
import casual from "../../assets/images/dress-style-images/casual.png";
import formal from "../../assets/images/dress-style-images/formal.png";
import party from "../../assets/images/dress-style-images/party.png";
import gym from "../../assets/images/dress-style-images/gym.png";
import classNames from "classnames";

const DressStyle = () => {
  return (
    <section>
      <Container>
        <div className={styles.dress_style_section}>
          <h3 className={styles.dress_style_text}>browse by dress style</h3>
          <div className={styles.dress_style_cards}>
            <div
              className={classNames(
                styles.dress_style_casual,
                styles.dress_style
              )}
            >
              <img src={casual} alt="casual" />
              <span className={styles.dress_style_card_text}>Casual</span>
            </div>
            <div
              className={classNames(
                styles.dress_style_formal,
                styles.dress_style
              )}
            >
              <img src={formal} alt="formal" />
              <span className={styles.dress_style_card_text}>Formal</span>
            </div>
            <div
              className={classNames(
                styles.dress_style_party,
                styles.dress_style
              )}
            >
              <img src={party} alt="party" />
              <span className={styles.dress_style_card_text}>Party</span>
            </div>
            <div
              className={classNames(styles.dress_style_gym, styles.dress_style)}
            >
              <img src={gym} alt="gym" />
              <span className={styles.dress_style_card_text}>Gym</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DressStyle;
