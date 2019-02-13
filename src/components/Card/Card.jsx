import React from 'react'
import cn from 'classnames'

import './Card.scss'

const Card = ({ children, className }) => <div className={cn("card",className)}>{children}</div>

export default Card
