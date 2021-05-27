import React from 'react'
import { useHistory } from 'react-router-dom'
import useViewPort from '../../../../hooks/useViewport'
import styles from './Buttons.module.scss'

const Buttons = ({ open, setOpen }) => {
  const { width } = useViewPort()
  const breakpoint = 680
  const history = useHistory()

  const handleRedirect = (path) => {
    width < breakpoint ? setOpen(!open) : setOpen(open)
    history.push(`${path}`)
  }

  return (
    <>
      <button className={styles.styledLink} onClick={() => handleRedirect('/')}>
        Home
      </button>
      <button
        className={styles.styledLink}
        onClick={() => handleRedirect('/menu')}
      >
        Menu
      </button>
      <button className={styles.styledLink} onClick={() => handleRedirect('/')}>
        About
      </button>
      <button className={styles.styledLink} onClick={() => handleRedirect('/')}>
        Contact
      </button>
    </>
  )
}

export default Buttons
