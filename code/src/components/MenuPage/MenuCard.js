import React from 'react'
import { container } from './MenuCard.module.scss'

const MenuCard = ({ filteredMenu }) => {
  return (
    <>
      {filteredMenu &&
        filteredMenu.map((menu) => (
          <div key={menu.id} className={container}>
            <img
              src={`assets/${menu.img}`}
              alt="dish"
              width="150vw"
              height="150vw"
            />
            <p>{menu.title}</p>
            <p>{menu.price}</p>
            <p>{menu.desc}</p>
          </div>
        ))}
    </>
  )
}

export default MenuCard
