import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import compassicon from "../../public/resources/compassicon.png";

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logo}>
          <Image width={45} height={40} src={compassicon} alt="logo" />
        </div>
        <a href="/" className={styles.navbarItem}>
          <div className={styles.companyName}>SPIRO</div>
        </a>
      </div>
      <div className={styles.navbarRight}>
        <a href="/" className={styles.navbarItem}>
          Home
        </a>
        <a href="/store" className={styles.navbarItem}>
          Store
        </a>
        <a href="/profile" className={styles.navbarItem}>
          Profile
        </a>
      </div>
    </div>
  );
};

export default navbar;
