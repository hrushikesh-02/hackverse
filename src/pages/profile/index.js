import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Profile.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sketch from "@/components/sketch";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let arr = [100, 190, 50];
  let blankArr = [1, 2, 3, 4, 5];
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
                {blankArr.map(() => {
                  return (
                    <div className={styles.sectionItem}>
                      <Sketch data={{ nft: arr }} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Platinum</div>
              <div className={styles.sectionContent}>
                {blankArr.map(() => {
                  return (
                    <div className={styles.sectionItem}>
                      <Sketch
                        data={{
                          nft: [
                            arr[0] * Math.random(),
                            arr[1] * Math.random(),
                            arr[2] * Math.random(),
                          ],
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Gold</div>
              <div className={styles.sectionContent}>
                {blankArr.map(() => {
                  return (
                    <div className={styles.sectionItem}>
                      <Sketch data={{ nft: arr }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
