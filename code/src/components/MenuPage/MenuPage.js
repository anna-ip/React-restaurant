import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../App'
import FilterBtn from './FilterBtn'
import MenuCard from './MenuCard'
import styles from './MenuPage.module.scss'

const MenuPage = () => {
  const [storeMenus] = useContext(MenuContext)
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
      <Link to="/">Go to home page</Link>

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
