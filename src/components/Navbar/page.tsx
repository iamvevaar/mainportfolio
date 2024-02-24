"use client"
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import styles from "./page.module.css";
import { RiServiceLine } from "react-icons/ri";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('#');

  return (
    <nav className={styles.nav} >
      <Link href="#" onClick={() => { setActiveNav('#'); }} className={activeNav === '#' ? styles.active : ''}><AiOutlineHome /></Link>
      <Link href="#about" onClick={() => { setActiveNav('#about'); }} className={activeNav === '#about' ? styles.active : ''}><AiOutlineUser /></Link>
      <Link href="#experiences" onClick={() => { setActiveNav('#experiences'); }} className={activeNav === '#experiences' ? styles.active : ''}><BiBook /></Link>
      <Link href="#contact" onClick={() => { setActiveNav('#contact'); }} className={activeNav === '#contact' ? styles.active : ''}><RiServiceLine /></Link>
      <Link href="#portfolio" onClick={() => { setActiveNav('#portfolio'); }} className={activeNav === '#contact' ? styles.active : ''}><BiMessageSquareDetail /></Link>
    </nav>
  );
};

export default Navbar;
