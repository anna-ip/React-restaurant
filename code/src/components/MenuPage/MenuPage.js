import React, { useState } from 'react'
import MenuCard from './MenuCard'
import menus from '../../menus'

const filteredBtn = ['all']
menus.filter((item) => {
  let i = filteredBtn.findIndex((x) => x.category === item.category)
  if (i <= -1) {
    filteredBtn.push(item)
  }
  return null
})

const MenuPage = () => {
  const [filteredMenu, setFilteredMenu] = useState(menus || [])

  const filterMenuClick = (e) => {
    console.log(e.target.value)
    let btnValue = e.target.value
    const filteredMenus = menus.filter((cat) => cat.category === btnValue)

    if (btnValue === 'all') {
      setFilteredMenu(menus)
    } else {
      setFilteredMenu(filteredMenus)
    }
  }

  return (
    <div className="menupage-container">
      <h2>Menu</h2>

      {/*  move filter btn section into its own component ? */}
      {filteredBtn.map((section, index) => (
        <button
          onClick={filterMenuClick}
          value={section.category || 'all'}
          key={index}
        >
          {section.category || 'all'}
        </button>
      ))}
      <MenuCard filteredMenu={filteredMenu} />
    </div>
  )
}

export default MenuPage
