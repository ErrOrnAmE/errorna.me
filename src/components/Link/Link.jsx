import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ external, to, children, ...rest }) =>
  external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <RouterLink to={to} {...rest}>
      {children}
    </RouterLink>
  )

export default Link
