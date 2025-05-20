import React from "react";
import Header from "./components/Shared/Header/Header";
import Hero from "./components/Hero/Hero";
import CardSection from "./components/Shared/CardSection/CardSection";
import { newArrivals, topSelling } from "./data/mock";
import Container from "./components/UI/Container/Container";
import styles from "./app.module.scss";
import DressStyle from "./components/DressStyle/DressStyle";
import Slider from "./components/Slider/Slider";
import { topReview } from "./data/topReview";
import Footer from "./components/Shared/Footer/Footer";
import { footerLinks } from "./data/footerLinks";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CardSection title="new arrivals" cards={newArrivals} hasButton={true} />
      <Container>
        <div className={styles.bar}></div>
      </Container>
      <CardSection title="new arrivals" cards={topSelling} hasButton={true} />
      <DressStyle />
      <Slider reviewCards={topReview} />
      <Footer footerLinks={footerLinks} />
    </div>
  );
}

export default App;
