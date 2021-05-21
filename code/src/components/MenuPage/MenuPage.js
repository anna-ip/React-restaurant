import React from 'react'
import { MenuContext } from '../../App'
import FilterBtn from './FilterBtn/FilterBtn'
import MenuCard from './MenuCard/MenuCard'
import styles from './MenuPage.module.scss'

const MenuPage = () => {
  const [storeMenus] = React.useContext(MenuContext)
  const menus = storeMenus.menus
  const [filteredMenu, setFilteredMenu] = React.useState(menus || [])

  const filterMenuClick = (e) => {
    const btnValue = e.target.value

    if (btnValue === 'all') {
      setFilteredMenu(menus)
    } else {
      const filteredMenuItems = filterMenus(menus, btnValue)
      setFilteredMenu(filteredMenuItems)
    }
  }

  return (
    <div className={styles.container}>
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

export const filterMenus = (menus, val) => {
  return menus.filter((menu) => menu.category === val)
}

export default MenuPage
