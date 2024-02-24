import React from 'react';
import styles from './page.module.css';
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaArrowDown } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://github.com/iamvevaar', icon: <FaGithub /> },
    { href: 'https://www.facebook.com/gautam.suthar.37017', icon: <FaFacebook /> },
    { href: 'https://www.instagram.com/iamvevaar/', icon: <FaInstagram /> },
    { href: 'https://twitter.com/iamvevaar', icon: <FaTwitter /> },
    { href: 'https://youtube.com/@iamvevaar', icon: <FaYoutube /> },

  ];

  return (
    <section className={styles.footermain}>
      <div>
        <a href="#" className={styles.footermainLogo}>
          VEVAAR
        </a>

        <ul className={styles.permalinks}>
          {renderNavLink('Home')}
          {renderNavLink('About', '#about')}
          {renderNavLink('Experiences', '#experiences')}
          {renderNavLink('Portfolio', '#portfolio')}
          {renderNavLink('Contact', '#contact')}
        </ul>

        <div className={styles.footermainSocials}>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>

        <div className={styles.footermainCopyright}>
          <small>&copy; vevaar</small>
        </div>
        <div className={styles.logoContainer}>
          <Link href="">
            <FaArrowDown className={styles.upsideLogo} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const renderNavLink = (label: string, href?: string) => (
  <li key={label.toLowerCase().replace(/\s/g, '')}>
    <a href={href ? href : '#'}>{label}</a>
  </li>
);

export default Footer;
