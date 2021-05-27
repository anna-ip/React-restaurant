import React, { useContext } from 'react'
import { MenuContext } from '../../../App'
import Button from '../../../ui-components/Button'
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
      {filteredBtn.map((section, index) => {
        const category = getCategoryFromSection(section)

        return (
          <div key={index}>
            <Button
              onClick={(e) => filterMenuClick(e)}
              value={category}
              className={`${styles.btn}`}
            />
          </div>
        )
      })}
    </>
  )
}

export const getCategoryFromSection = (section) => {
  return section?.category || 'all'
}

export default FilterBtn
