import React from "react";
import styles from "./page.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs';
import { RiFacebookCircleLine, RiTelegramLine } from 'react-icons/ri';
// import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

  return (
    <section id="contact" className={styles.contact}>
      <h5>Get In Touch</h5>
      <h2 id='special'>Contact ME</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactOptions}>
          {renderContactOption(<MdOutlineEmail className={styles.contactOptionIcon} />, "Email", "iamvevaar@gmail.com", "mailto:iamvevaar@gmail.com")}
          {renderContactOption(<RiFacebookCircleLine className={styles.contactOptionIcon} />, "Messenger", "iamvevaar", "https://m.me/gautam.suthar.37017")}
          {renderContactOption(<BsWhatsapp className={styles.contactOptionIcon} />, "WhatsApp", "+91 9928191868", "https://api.whatsapp.com/send?phone=9928191868")}
          {renderContactOption(<RiTelegramLine className={styles.contactOptionIcon} />, "Telegram", "+91 9928191868", "https://telegram.me/iamvevaar")}
        </div>
      </div>
    </section>
  );
};

const renderContactOption = (icon: JSX.Element, title: string, value: string, link: string) => (
  <article className={styles.contactOption}>
    {icon}
    <h4>{title}</h4>
    <h5>{value}</h5>
    <a href={link} target='_blank' rel='noopener noreferrer'>Contact</a>
  </article>
);

export default Contact;
