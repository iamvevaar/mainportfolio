import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import cpr from "../../assets/cpr.jpg";

interface PortfolioItemProps {
  imgSrc: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imgSrc,
  title,
  description,
  githubLink,
  liveDemoLink,
}) => (
  <article className={styles.portfolioItem}>
    <div className={styles.portfolioItemImage}>
      <Image src={imgSrc} alt={title} width={250} height={250} />
      {/* <img src={imgSrc} alt={title} /> */}
    </div>
    <div className={styles.portfolioHead}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className={styles.portfolioItemCTA}>
      <a href={githubLink} className="btn" target="_blank" rel="noreferrer">
        Github
      </a>
      {liveDemoLink && (
        <a href={liveDemoLink} className="btn btn-primary" target="blank">
          Live Demo
        </a>
      )}
    </div>
  </article>
);

const webDevItems = [
  {
    imgSrc:
      "https://private-user-images.githubusercontent.com/69046800/316125525-812e7362-1572-42a1-9b32-7d4fb8f73bc5.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTExNzYxODgsIm5iZiI6MTcxMTE3NTg4OCwicGF0aCI6Ii82OTA0NjgwMC8zMTYxMjU1MjUtODEyZTczNjItMTU3Mi00MmExLTliMzItN2Q0ZmI4ZjczYmM1LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzIzVDA2MzgwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcwNmFkM2FmOWRjYzM3ODA5ZTYyZjE5Y2ZkMDNkNThjY2Q2NjBhNWRjZjQ5YmNkZmU2MTU1NTE2YzE3NWU4ZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.sER_S0zYygAZfOivCnqUbpGlbmk5NQ46R7X98ZS75No",
    title: "ICG",
    description: "Frontend | React.ts | Tailwind | React Advanced Cropper",
    githubLink: "https://github.com/iamvevaar/cpr",
    liveDemoLink: "https://cpr-lilac.vercel.app/",
  },
  {
    imgSrc:
      "https://user-images.githubusercontent.com/69046800/196301741-c0e34585-8ea8-490d-bd89-c96aff360429.png",
    title: "Vechat",
    description: "Frontend | Firebase | React.js",
    githubLink: "https://github.com/iamvevaar/vchat",
    liveDemoLink: "https://vechats.netlify.app/",
  },
  {
    imgSrc:
      "https://user-images.githubusercontent.com/69046800/199338623-2cd8e9fd-c5f0-4242-91ec-7b9c9d7b20e0.png",
    title: "Vecoins",
    description: "Frontend | React.js | API",
    githubLink: "https://github.com/iamvevaar/vecoins.git",
    liveDemoLink: "https://vecoins.netlify.app/",
  },
  {
    imgSrc:
      "https://user-images.githubusercontent.com/69046800/196300739-f9b13a60-f40c-40d8-bec8-6084a502c7df.png",
    title: "Weather App",
    description: "Vanilla Javascript",
    githubLink: "https://github.com/iamvevaar/vether/tree/master",
    liveDemoLink: "https://veathers.netlify.app/",
  },
];

const chromeExtensionItems = [
  {
    imgSrc:
      "https://user-images.githubusercontent.com/69046800/196301741-c0e34585-8ea8-490d-bd89-c96aff360429.png",
    title: "Loopsi",
    description: "Javascript | Chrome Extension",
    githubLink: "https://github.com/iamvevaar/loopsi",
    liveDemoLink: "",
  },
  {
    imgSrc:"https://private-user-images.githubusercontent.com/69046800/307497647-71d03e24-5694-4501-9523-27f7188f6719.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTExNzY3NzYsIm5iZiI6MTcxMTE3NjQ3NiwicGF0aCI6Ii82OTA0NjgwMC8zMDc0OTc2NDctNzFkMDNlMjQtNTY5NC00NTAxLTk1MjMtMjdmNzE4OGY2NzE5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzIzVDA2NDc1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE1NmJhMzMzM2VhODY3MjBkNzczMmY5ZGMyODMwNWMzYWVjYTQ2MTBlMjQ2NGMzN2U5NjQzZmRjM2I0NTI0NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.083XF41OzI4WOYqURxJHF7MXtyRRkA6VYpGp0dBYlqs",
    title: "Extension2x",
    description: "Frontend | React.js | API",
    githubLink: "https://github.com/iamvevaar/extension2x",
    liveDemoLink: "",
  },
];

const pythonUtilityItems = [
  {
    imgSrc:
      "https://user-images.githubusercontent.com/69046800/196301741-c0e34585-8ea8-490d-bd89-c96aff360429.png",
    title: "Loopsi",
    description: "Javascript | Chrome Extension",
    githubLink: "",
    liveDemoLink: "",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* web application div */}
      <div className={`${styles.container} ${styles.portfolioMainContainer}`}>
        <div>
          <h1>Web Applications</h1>
        </div>
        <div className={styles.portfolioContainer}>
          {webDevItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* chrome application container */}
      <div className={`${styles.container} ${styles.portfolioMainContainer}`}>
        <div>
          <h1>Chrome Extensions</h1>
        </div>
        <div className={styles.portfolioContainer}>
          {chromeExtensionItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* python utilitise */}
      <div className={`${styles.container} ${styles.portfolioMainContainer}`}>
        <div>
          <h1>Python Utilities</h1>
        </div>
        <div className={styles.portfolioContainer}>
          {pythonUtilityItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
