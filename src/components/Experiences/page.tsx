import React from "react";
import styles from "./page.module.css";
import {
  DiHtml5,  
  DiCss3,
  DiBootstrap,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJavascript1,
  DiDocker,
} from "react-icons/di";


import {
    SiTailwindcss,
    SiExpress,
    SiSolidity,
    SiEthereum,
    SiKubernetes,
    SiMui,
  } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { TbBrandNextjs, TbBrandOpenai } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
interface ExperienceDetail {
  icon: JSX.Element;
  title: string;
  proficiency: string;
}

const frontendTechnologies: ExperienceDetail[] = [
  { icon: <DiHtml5 className={styles.experiencesIcon} />, title: "HTML", proficiency: "Intermediate" },
  { icon: <DiCss3 className={styles.experiencesIcon} />, title: "CSS", proficiency: "Intermediate" },
  { icon: <DiJavascript1 className={styles.experiencesIcon} />, title: "JavaScript", proficiency: "Intermediate" },
  { icon: <RiReactjsFill className={styles.experiencesIcon} />, title: "Reactjs", proficiency: "Intermediate" },
  { icon: <TbBrandNextjs className={styles.experiencesIcon} />, title: "Nextjs", proficiency: "Begineer" },
  { icon: <SiTailwindcss className={styles.experiencesIcon} />, title: "Tailwind", proficiency: "Intermediate" },
  { icon: <SiMui className={styles.experiencesIcon} />, title: "Bootstrap", proficiency: "Intermediate" },
];

const backendTechnologies: ExperienceDetail[] = [
  { icon: <DiNodejsSmall className={styles.experiencesIcon} />, title: "NodeJS", proficiency: "Intermediate" },
  { icon: <SiExpress className={styles.experiencesIcon} />, title: "Express", proficiency: "Intermediate" },
  { icon: <DiMongodb className={styles.experiencesIcon} />, title: "MongoDB", proficiency: "Begineer" },
  { icon: <BiLogoPostgresql className={styles.experiencesIcon} />, title: "Postgresql", proficiency: "Begineer" },
  // { icon: <SiSolidity className={styles.experiencesIcon} />, title: "Solidity", proficiency: "Intermediate" },
];
const OtherTechnologies: ExperienceDetail[] = [
  { icon: <LiaDocker className={styles.experiencesIcon} />, title: "Docker", proficiency: "Begineer" },
  { icon: <DiGithubBadge className={styles.experiencesIcon} />, title: "GitHub", proficiency: "Intermediate" },
  { icon: <SiKubernetes className={styles.experiencesIcon} />, title: "Kubernetes", proficiency: "Begineer" },
  { icon: <TbBrandOpenai className={styles.experiencesIcon} />, title: "Langchain", proficiency: "Begineer" },
  { icon: <SiEthereum className={styles.experiencesIcon} />, title: "Ethereum", proficiency: "Begineer" },
  { icon: <FaGitAlt className={styles.experiencesIcon} />, title: "Git", proficiency: "Intermediate" },
];

const Experiences: React.FC = () => {
  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className={styles.container + " " + styles.experiencesContainer}>
        <div className={styles.experiencesFrontend}>
          <h3>Frontend Technologies</h3>
          <div className={styles.experiencesContent}>
            {frontendTechnologies.map((tech, index) => (
              <article key={index} className={styles.experiencesDetail}>
                {tech.icon}
                <div>
                  <h4>{tech.title}</h4>
                  <small className="text-light">{tech.proficiency}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.experiencesBackend}>
          <h3>Backend Technologies</h3>
          <div className={styles.experiencesContent}>
            {backendTechnologies.map((tech, index) => (
              <article key={index} className={styles.experiencesDetail}>
                {tech.icon}
                <div>
                  <h4>{tech.title}</h4>
                  <small className={styles.textlight}>{tech.proficiency}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.experiencesBackend}>
          <h3>Other Technologies</h3>
          <div className={styles.experiencesContent}>
            {OtherTechnologies.map((tech, index) => (
              <article key={index} className={styles.experiencesDetail}>
                {tech.icon}
                <div>
                  <h4>{tech.title}</h4>
                  <small className={styles.textlight}>{tech.proficiency}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experiences;
