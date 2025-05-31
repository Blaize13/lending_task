import { footerLinks } from "../../data/footerLinks";
import { newArrivals, topSelling } from "../../data/mock";
import { topReview } from "../../data/topReview";

import DressStyle from "../../components/DressStyle/DressStyle";
import Hero from "../../components/Hero/Hero";
import CardSection from "../../components/Shared/CardSection/CardSection";
import Footer from "../../components/Shared/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Container from "../../components/UI/Container/Container";

import styles from "./styles.module.scss";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <CardSection title="new arrivals" cards={newArrivals} hasButton={true} />
      <Container>
        <div className={styles.bar}></div>
      </Container>
      <CardSection title="new arrivals" cards={topSelling} hasButton={true} />
      <DressStyle />
      <Slider reviewCards={topReview} />
    </div>
  );
};

export default MainPage;
