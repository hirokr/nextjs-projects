import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
              lamadev
            </div>
            <div className={styles.text}>
              Lama Creative thoughts agency &copy; all rights reserved
            </div>
        </div>
    );
};

export default Footer;
