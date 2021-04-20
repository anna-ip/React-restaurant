import React, { useState } from 'react'
import MenuCard from './MenuCard'
import menus from '../../menus'

const filteredBtn = ['all']
menus.filter((item) => {
  //console.log(item)
  let i = filteredBtn.findIndex((x) => x.category === item.category)
  if (i <= -1) {
    filteredBtn.push(item)
  }
  return null
})

const MenuPage = () => {
  const [filteredMenu, setFilteredMenu] = useState(menus)

  //filter functionlaity goes here? And filtered menu is passed to menucard?
  const filterMenuClick = (e) => {
    console.log(e.target.value)
    let category = e.target.value
    const filteredMenus = filteredMenu.filter((menu) => {
      console.log(menu)
      return menu.toString().toLowerCase().includes(category.toLowerCase())
    })
    console.log('filtered menus', filteredMenus)
    setFilteredMenu(filteredMenus)
    console.log('filtered menu', filteredMenu)
  }

  return (
    <div className="menupage-container">
      <h2>Menu</h2>

      {filteredBtn.map((section, index) => (
        <button
          onClick={filterMenuClick}
          value={section.category || 'all'}
          key={index}
        >
          {section.category || 'all'}
        </button>
      ))}

      {/* // filter btn section moved into its own component
  // menu cards split into its own component */}

      <MenuCard filteredMenu={filteredMenu} />
    </div>
  )
}

export default MenuPage
