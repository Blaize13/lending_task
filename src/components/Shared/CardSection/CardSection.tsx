import React from "react";
import styles from "./styles.module.scss";
import Container from "../../UI/Container/Container";
import Card from "../Card/Card";
import { ICrad } from "../../../data/mock";
import Button from "../../UI/Button/Button";

interface ICardSectionProps {
  title: string;
  cards: ICrad[];
  hasButton: true | false;
}

const CardSection: React.FC<ICardSectionProps> = ({
  title,
  cards,
  hasButton,
}) => {
  return (
    <section className={styles.card_section}>
      <Container>
        <h3 className={styles.card_section_title}>{title}</h3>
        <div className={styles.all_cards}>
          {cards.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
        {hasButton && (
          <div className={styles.section_button}>
            <Button
              text="View All"
              variant="transparent"
              paddingX={80}
              paddingY={15}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default CardSection;
