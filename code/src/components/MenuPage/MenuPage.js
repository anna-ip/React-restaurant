import React, { useContext, useState } from 'react'
import { MenuContext } from '../../App'
import Links from '../Links/Links'
import FilterBtn from './FilterBtn/FilterBtn'
import MenuCard from './MenuCard/MenuCard'
import styles from './MenuPage.module.scss'

const MenuPage = () => {
  const [storeMenus] = React.useContext(MenuContext)
  const menus = storeMenus.menus

  const [filteredMenu, setFilteredMenu] = useState(menus || [])

  const filterMenuClick = (e) => {
    const btnValue = e.target.value
    const filteredMenus = menus.filter((cat) => cat.category === btnValue)

    if (btnValue === 'all') {
      setFilteredMenu(menus)
    } else {
      setFilteredMenu(filteredMenus)
    }
  }

  return (
    <div className={styles.container}>
      <Links to={'/'} text={'Go to home page'} className={styles.link} />

      <h2>Menu</h2>
      <div className={styles.btnContainer}>
        <FilterBtn filterMenuClick={filterMenuClick} />
      </div>
      <section className={styles.cardContainer}>
        <MenuCard filteredMenu={filteredMenu} />
      </section>
    </div>
  )
}

export default MenuPage
