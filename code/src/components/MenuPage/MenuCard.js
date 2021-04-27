import React from 'react'
import styles from './MenuCard.module.scss'

const MenuCard = ({ filteredMenu }) => {
  return (
    <>
      {filteredMenu &&
        filteredMenu.map((menu) => (
          <div key={menu.id} className={styles.container}>
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
        ))}
    </>
  )
}

export default MenuCard
