import React from "react";
import Globe from "../../assets/globe.png"
import Image from 'next/image'
// import "./header.css";
import styles from "./page.module.css";
import Icons from "./Icons";
import Link from 'next/link'
// import SPARKS from "../../assets/demodemo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container + " " + styles.headerContainer}>
        <h5>Hello I'm</h5>
        <h1>Gautam Suthar</h1>
        <h5 className="textlight">Solepreneur | Javascript Developer | Freelance Video Editor | SMM</h5>
        <div className={styles.cta}>
          <Link
            href="https://drive.google.com/file/d/1QQWIXb7ZKXrVYe0VzvrVVM-oUKnazCLO/view?usp=sharing"
            className="btn"
            target="blank"
          >
            Resume
          </Link>
          <Link href="#contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>

        <Icons />

        <div className={styles.level}>
          <div className={styles.memo}>
            <Image src={Globe} alt="sparkler" />
          </div>
        </div>

        <div className={styles.scrollDown}>
          <Link href="#footer" scroll={true}>
            Scroll Down
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
