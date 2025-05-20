import styles from "./styles.module.scss";
import Banner from "../Banner/Banner";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import FooterLinks from "../FooterLinks/FooterLinks";
import { IFooterLinks } from "../../../data/footerLinks";
import Container from "../../UI/Container/Container";
import visa from "../../../assets/images/payment-images/visa.png";
import masterCard from "../../../assets/images/payment-images/master-card.png";
import payPal from "../../../assets/images/payment-images/pay-pal.png";
import applePay from "../../../assets/images/payment-images/apple-pay.png";
import googlePay from "../../../assets/images/payment-images/google-pay.png";

interface IFooterProps {
  footerLinks: IFooterLinks[];
}

const Footer: React.FC<IFooterProps> = ({ footerLinks }) => {
  return (
    <div>
      <Banner />
      <div className={styles.footer}>
        <Container>
          <div className={styles.footer_content}>
            <div className={styles.footer_shop}>
              <h3 className={styles.shop_title}>Shop.co</h3>
              <h4 className={styles.shop_suptitle}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </h4>
              <div className={styles.shop_icons}>
                <div className={styles.shop_icon}>
                  <a href="#">
                    <Twitter size={16} />
                  </a>
                </div>
                <div className={styles.shop_icon}>
                  <a href="#">
                    <Facebook size={16} />
                  </a>
                </div>
                <div className={styles.shop_icon}>
                  <a href="#">
                    <Instagram size={16} />
                  </a>
                </div>
                <div className={styles.shop_icon}>
                  <a href="#">
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.footer_links}>
              {footerLinks.map((item) => (
                <div className={styles.footer_link}>
                  <FooterLinks key={item.id} data={item} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.copyright_container}>
            <h5 className={styles.copyright}>
              Shop.co © 2000-2023, All Rights Reserved
            </h5>
            <div className={styles.payment}>
              <a href="#">
                <img src={visa} alt="visa" />
              </a>
              <a href="#">
                <img src={masterCard} alt="masterCard" />
              </a>
              <a href="#">
                <img src={payPal} alt="payPal" />
              </a>
              <a href="#">
                <img src={applePay} alt="applePay" />
              </a>
              <a href="#">
                <img src={googlePay} alt="googlePay" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
