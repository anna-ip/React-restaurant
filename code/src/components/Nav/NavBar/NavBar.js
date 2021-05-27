import React, { useState } from 'react'
import Burger from '../Burger/Burger'
import Menu from '../Menu/Menu'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}
export default NavBar
