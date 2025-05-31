import React from "react";
import AboutProduct from "../../components/AboutProduct/AboutProduct";
import CardSection from "../../components/Shared/CardSection/CardSection";
import { alsoLike } from "../../data/mock";
import AllReviews from "../../components/AllReviews/AllReviews";
import { allReviews } from "../../data/topReview";

const AboutCardPage = () => {
  return (
    <div>
      <AboutProduct />
      <AllReviews reviewCards={allReviews} />
      <CardSection
        title="You might also like"
        cards={alsoLike}
        hasButton={false}
      />
    </div>
  );
};

export default AboutCardPage;
