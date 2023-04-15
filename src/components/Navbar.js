import React from "react";
import styles from "@/styles/Navbar.module.css";
const navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logo}></div>
        <div className={styles.companyName}>NFT Platform</div>
      </div>
      <div className={styles.navbarRight}>
        <a href="#" className={styles.navbarItem}>
          Home
        </a>
        <a href="#" className={styles.navbarItem}>
          Store
        </a>
        <a href="#" className={styles.navbarItem}>
          profile
        </a>
      </div>
    </div>
  );
};

export default navbar;
