import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Links.module.scss'

const Links = (props) => {
  const { to, text } = props
  //console.log('text', JSON.stringify(props))
  return (
    <Link to={to} className={styles.styledLink}>
      {text}
    </Link>
  )
}

export default Links
