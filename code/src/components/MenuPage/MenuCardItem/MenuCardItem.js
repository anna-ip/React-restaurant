import React from 'react'
import styles from './MenuCardItem.module.scss'

const MenuCardItem = ({ menu }) => {
  return (
    <div className={styles.container}>
      <img
        src={`assets/${menu.img}`}
        alt="dish"
        width="150vw"
        height="150vw"
        className={styles.img}
      />
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{menu.title}</p>
          <p>{menu.price}</p>
        </div>
        <p className={styles.desc}>{menu.desc}</p>
      </section>
    </div>
  )
}

export default MenuCardItem
