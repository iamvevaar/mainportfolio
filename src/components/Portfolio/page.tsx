import React from "react";
import styles from "./page.module.css";

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
      <img src={imgSrc} alt={title} />
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
    imgSrc:
    "https://raw.githubusercontent.com/iamvevaar/Extension2X/main/_ff3523ab-590e-43fa-a7f7-38c93aec4d31.jpg",
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
  }]

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
