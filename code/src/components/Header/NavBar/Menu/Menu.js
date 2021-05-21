import React from 'react'
import styles from './Menu.module.scss'
import Links from '../../../Links/Links'

function Menu({ open, setOpen}) {

  return (
    <div>
      <nav
        open={open}
        className={!open ? [styles.nav] : [styles.navOpen]}
      >
        <ul className={!open ? [styles.menuNav] : [styles.menuNavOpen]}>
          <li className={styles.menuNavItem}>
            <Links to={'/'} text={'Home'} >
              Home
            </Links>
            <Links to={'/menu'} text={'Menu'}>
              Menu
            </Links>
            <Links to={'/'} text={'About'}>
              About
            </Links>
            <Links to={'/'} text={'Contact'}>
              Contact
            </Links>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
