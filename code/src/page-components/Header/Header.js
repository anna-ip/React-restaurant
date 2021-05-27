import React from 'react'
import NavBar from '../../components/Nav/NavBar/NavBar'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <NavBar />
      <h1 className={styles.logo}>The Diner</h1>
    </>
  )
}

export default Header
