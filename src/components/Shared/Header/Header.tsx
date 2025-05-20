import styles from "./styles.module.scss";
import { ChevronDown, Search, ShoppingCart, User, X } from "lucide-react";
import Container from "../../UI/Container/Container";

const Header = () => {
  return (
    <header>
      <div className={styles.promo_bar}>
        <Container>
          <div className={styles.promo_bar_text}>
            <span className={styles.first_text}>
              Sign up and get 20% off to your first order.
            </span>
            <span className={styles.second_text}>Sign Up Now</span>
            <X size={20} strokeWidth={1.25} className={styles.close_icon} />
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.header}>
          <div className={styles.logo}>SHOP.CO</div>

          <nav className={styles.nav}>
            <a href="#">
              Shop
              <div className={styles.icon_arrow}>
                <ChevronDown size={16} strokeWidth={1.25} />
              </div>
            </a>

            <a href="#">On Sale</a>
            <a href="#">New Arrivals</a>
            <a href="#">Brands</a>
          </nav>

          <div className={styles.search}>
            <Search size={16} strokeWidth={1.5} />
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className={styles.icons}>
            <ShoppingCart size={20} />
            <User size={20} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
