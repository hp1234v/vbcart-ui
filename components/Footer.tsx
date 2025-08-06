import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} VBcart. All rights reserved.
  </footer>
);

export default Footer;