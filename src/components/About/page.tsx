import React from "react";
import styles from "./page.module.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import Link from "next/link";
import DP from "../../assets/vevaar.png"
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeImage}>
            <Image 
              src={DP}
              alt="Meri DP"
              width={200}
              height={200}
            />
            {/* <img
              src="https://iamvevaar.github.io/vevaar/static/media/Portrait.306fc19d92bc9a2f0b65.png"
            /> */}
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutCards}>
            {renderAboutCard(<FaAward className={styles.aboutIcon} />, "Experience", "2+ Years Working")}
            {renderAboutCard(<FiUsers className={styles.aboutIcon} />, "Clients", "5+ Happy Clients")}
            {renderAboutCard(<VscProject className={styles.aboutIcon} />, "Projects", "10+ Completed")}
          </div>
          <p>
            Hello Saab I am Gautam Suthar 🇮🇳, a smiley tech geek student and learner who loves Programming |
            Editing & Designing. In Programming, I'm very confident with Frontend Web Development
            using NextJS. Sometimes I try my hands on Backend Dev using Node | Express because it helps me always to
            remain close with javascript. If I talk about Designing, somehow it is very natural for
            me to design interactive stuffs, And the most important thing, I'm a Final Year
            College student pursuing my bachelor's in Computer Science. Last but not least, me amo
            español y aprendiendo el idioma español. Yes, I'm learning Spanish too. In addition,
            I'm not a photographer but an Editor who loves to enhance the beauty in Picture MODE. So 
            you may visit my page on Instagram{" "}
            <Link href="https://www.instagram.com/vevaarclicks/" target="_blank">
              @vevaarclicks.
            </Link>{" "}
            And Sometimes i use my wild creativity to make AI generated Art. I'm a big fan of this generative tools who actually help me to reduce my stress and anxiety , sounds wiered but it is actually true.
            {" "}
            <Link href="https://www.instagram.com/vevaarcreation/" target="_blank">
              @vevaarcreation.
            </Link>{" "}
            Thanks for your kind attention.
          </p>
          <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

const renderAboutCard = (icon: JSX.Element, title: string, description: string) => (
  <article className={styles.aboutCard}>
    {icon}
    <h5>{title}</h5>
    <small>{description}</small>
  </article>
);

export default About;
