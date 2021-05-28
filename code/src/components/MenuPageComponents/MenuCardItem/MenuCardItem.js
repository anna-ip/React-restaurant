import React from "react";
import styles from "./MenuCardItem.module.scss";

const MenuCardItem = ({ menu }) => {
  return (
    <article className={styles.container}>
      <img src={`assets/${menu.img}`} alt="dish" className={styles.img} />
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{menu.title}</p>
          <p>{menu.price}</p>
        </div>
        <p className={styles.desc}>{menu.desc}</p>
      </section>
    </article>
  );
};

export default MenuCardItem;
