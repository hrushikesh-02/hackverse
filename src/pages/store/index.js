import React, { useState } from "react";
import { useEffect } from "react";
import styles from "@/styles/Store.module.css";
import Navbar from "@/components/Navbar";
import Sketch from "@/components/sketch";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Store = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleFetchData = async () => {
    const response = await fetch("/api/store");
    const result = await response.json();
    setData(result.list);
    console.log(result);
  };
  useEffect(() => {
    handleFetchData();
  }, []);
  const [data, setData] = useState([]);
  //rarity : Common, Rare , Epic , Legendary
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.gridlayout}>
        {data.map((item, ind) => {
          return (
            <div className={styles.item} key={ind}>
              <div className={styles.itemdesc}>
                {/* <img
                  src="https://news.artnet.com/app/news-upload/2021/02/NYAN-CAT-ARTINTERVIEW-copy.jpg"
                  className={styles.itemimage}
                /> */}
                <Sketch data={{ nft: item.nft }} />
              </div>
              <div className={styles.iteminfo}>
                <h3>Name : {item.user}</h3>
                <h4 style={{ color: "blueviolet" }}> Price: {item.price} </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
