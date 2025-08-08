// components/Footer.tsx

import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <p>
        &copy; {new Date().getFullYear()} <strong className={styles.strong}>VBcart</strong>. All rights reserved.
      </p>
      <div className={styles.links}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
