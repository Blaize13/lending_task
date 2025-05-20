import React from "react";
import styles from "./styles.module.scss";
import { IFooterLinks } from "../../../data/footerLinks";

interface IFooterLinkProps {
  data: IFooterLinks;
}

const FooterLinks: React.FC<IFooterLinkProps> = ({ data }) => {
  const { title, links } = data;
  return (
    <div>
      <h4 className={styles.link_title}>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={styles.links}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
