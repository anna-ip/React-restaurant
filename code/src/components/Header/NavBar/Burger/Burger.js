import React from 'react'
import styles from './Burger.module.scss'

const Burger = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(!open)
    console.log('Burger clicked')
  }

  return (
    <>
      <div className={styles.menuBtn} onClick={handleOpen}>
        <span
          className={!open ? [styles.burger] : [styles.burgerOpen]}
        ></span>
      </div>
    </>
  )
}

export default Burger
