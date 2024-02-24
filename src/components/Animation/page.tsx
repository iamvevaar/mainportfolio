import React from "react";
import styles from './page.module.css';

const Animation: React.FC = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={`${styles.wave} ${styles.wave1}`}></div>
            <div className={`${styles.wave} ${styles.wave2}`}></div>
            <div className={`${styles.wave} ${styles.wave3}`}></div>
            <div className={`${styles.wave} ${styles.wave4}`}></div>
        </footer>
    );
};

export default Animation;