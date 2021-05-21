import React from 'react'
import NavBar from './NavBar/NavBar'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <NavBar />
      <h1 className={styles.logo}>The Diner</h1>
    </div>
  )
}

export default Header
