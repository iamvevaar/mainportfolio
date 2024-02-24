import React from "react";
import styles from "./page.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs';
import { RiFacebookCircleLine, RiTelegramLine } from 'react-icons/ri';
// import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
//   const form = useRef<HTMLFormElement | null>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     emailjs.sendForm('service_tlxfnuf', 'template_48lxs0h', form.current, 'XSmka9Mx2D4-J0UwV')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });

//     e.currentTarget.reset();
//   };

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
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your EmailId" required />
          <textarea name="message" placeholder="Your Message" rows={7} required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form> */}
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
