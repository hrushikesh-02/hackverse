import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Profile.module.css";

const index = () => {
  return (
    <div>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.mainContent}>
          <div className={styles.profileLeft}>
            <div className={styles.profileImage}>
              <img></img>
            </div>
            <div className={styles.name}>
              {"Myname"} {"Lastname"}
            </div>
            <div className={styles.divider}>Account type:{"Premium"}</div>
            <div className={styles.divider}>Token count:{12}</div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.title}>My Collection</div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Diamond</div>
              <div className={styles.sectionContent}>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Platinum</div>
              <div className={styles.sectionContent}>
                <div className={styles.sectionItem}>item</div>

                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Gold</div>
              <div className={styles.sectionContent}>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
                <div className={styles.sectionItem}>item</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
