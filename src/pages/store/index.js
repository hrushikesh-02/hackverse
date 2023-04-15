import React from "react";
import styles from "@/styles/Store.module.css";

const Store = () => {
  const data = [
    {
      nft: "https://news.artnet.com/app/news-upload/2021/02/NYAN-CAT-ARTINTERVIEW-copy.jpg",
      user: "",
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
      <div className={styles.gridlayout}>
        {data.map((item) => {
          return (
            <div className={styles.item} key={item.nft}>
              <div className={styles.itemdesc}>
                <img src={item.nft} alt={item.nft} className={styles.itemimage}/>
                <p>{item.user}</p>
              </div>
              <h3> Price: {item.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
