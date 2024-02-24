import React from 'react';
// import "./header.css"
import styles from "./page.module.css";
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Icons: React.FC = () => {
    return (
        <div className={styles.headerSocials}>
            <a href="https://www.linkedin.com/in/iamvevaar/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/iamvevaar" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
            <a href="https://instagram.com/iamvevaar" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
            <a href="https://www.facebook.com/gautam.suthar.37017" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
            <a href='https://youtube.com/@iamvevaar' target="_blank" rel="noopener noreferrer"><FaYoutube /></a>        
        </div>
    );
};

export default Icons;
