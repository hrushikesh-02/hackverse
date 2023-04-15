import React from "react";
import styles from "@/styles/Store.module.css";
import Navbar from "@/components/Navbar";
const Store = () => {
  const data = [
    {
      nft: "https://news.artnet.com/app/news-upload/2021/02/NYAN-CAT-ARTINTERVIEW-copy.jpg",
      user: "Shreyash",
      rarity: "",
      price: "120",
    },
    {
      nft: "acbab",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "safcasdaf",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fascsafa",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fasfacssacascsaa",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fasfaacs",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fasfasacsac",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fasfacassa",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fasfacacs",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "fasfaacdac",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "ffa",
      user: "",
      rarity: "",
      price: "",
    },
    {
      nft: "",
      user: "",
      rarity: "",
      price: "120",
    },
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.gridlayout}>
        {data.map((item) => {
          return (
            <div className={styles.item} key={item.nft}>
              <div className={styles.itemdesc}>
                <img src={item.nft} className={styles.itemimage} />
              </div>
              <div className={styles.iteminfo}>
                <h3>Name : {item.user}</h3>
                <h4 style={{ color: "blueviolet" }}> Price: {item.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
