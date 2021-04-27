import React, { useContext } from 'react'
import { MenuContext } from '../../App'
import styles from './FilterBtn.module.scss'

const FilterBtn = ({ filterMenuClick }) => {
  const [storeMenus] = useContext(MenuContext)
  const menus = storeMenus.menus

  const filteredBtn = ['all']
  menus.filter((item) => {
    const i = filteredBtn.findIndex((x) => x.category === item.category)
    if (i <= -1) {
      filteredBtn.push(item)
    }
    return null
  })

  return (
    <>
      {filteredBtn.map((section, index) => (
        <button
          onClick={(e) => filterMenuClick(e)}
          value={section.category || 'all'}
          key={index}
          className={styles.btn}
        >
          {section.category || 'all'}
        </button>
      ))}
    </>
  )
}

export default FilterBtn
